const Task = require('../models/Task');

const createTask = async (req, res, next) => {
    try {
        const { title, description, status } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            createdBy: req.user._id
        });

        return res.status(201).json(task);
    } catch (error) {
        return next(error);
    }
};

const getMyTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
        return res.json(tasks);
    } catch (error) {
        return next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (req.body.title !== undefined) {
            task.title = req.body.title;
        }

        if (req.body.description !== undefined) {
            task.description = req.body.description;
        }

        if (req.body.status !== undefined) {
            task.status = req.body.status;
        }

        const updatedTask = await task.save();
        return res.json(updatedTask);
    } catch (error) {
        return next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.json({ message: 'Task deleted' });
    } catch (error) {
        return next(error);
    }
};

module.exports = { createTask, getMyTasks, updateTask, deleteTask };
