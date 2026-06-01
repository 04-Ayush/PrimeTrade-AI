const Task = require('../models/Task');
const User = require('../models/User');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        return res.json(users);
    } catch (error) {
        return next(error);
    }
};

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
        return res.json(tasks);
    } catch (error) {
        return next(error);
    }
};

const deleteAnyTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.json({ message: 'Task deleted' });
    } catch (error) {
        return next(error);
    }
};

module.exports = { getAllUsers, getAllTasks, deleteAnyTask };
