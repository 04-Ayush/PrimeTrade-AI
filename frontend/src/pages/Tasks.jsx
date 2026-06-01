import { useEffect, useState } from 'react';
import api from '../services/api';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [message, setMessage] = useState('');
    const [editingId, setEditingId] = useState('');

    const loadTasks = async () => {
        try {
            const res = await api.get('/tasks');
            setTasks(res.data);
        } catch (error) {
            setMessage('Could not load tasks');
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setStatus('pending');
        setEditingId('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            if (editingId) {
                await api.put(`/tasks/${editingId}`, { title, description, status });
                setMessage('Task updated');
            } else {
                await api.post('/tasks', { title, description, status });
                setMessage('Task created');
            }
            resetForm();
            loadTasks();
        } catch (error) {
            const msg = error.response?.data?.message || 'Operation failed';
            setMessage(msg);
        }
    };

    const handleEdit = (task) => {
        setTitle(task.title);
        setDescription(task.description || '');
        setStatus(task.status);
        setEditingId(task._id);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            setMessage('Task deleted');
            loadTasks();
        } catch (error) {
            setMessage('Delete failed');
        }
    };

    return (
        <div>
            <h2>Tasks</h2>
            {message && <div className="alert">{message}</div>}
            <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit">{editingId ? 'Update' : 'Create'}</button>
                {editingId && (
                    <button type="button" className="secondary" onClick={resetForm} style={{ marginLeft: 8 }}>
                        Cancel
                    </button>
                )}
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>
                                <div className="actions">
                                    <button type="button" className="secondary" onClick={() => handleEdit(task)}>
                                        Edit
                                    </button>
                                    <button type="button" className="danger" onClick={() => handleDelete(task._id)}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {tasks.length === 0 && (
                        <tr>
                            <td colSpan="3">No tasks yet</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tasks;
