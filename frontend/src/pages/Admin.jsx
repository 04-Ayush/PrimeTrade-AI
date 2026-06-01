import { useEffect, useState } from 'react';
import api from '../services/api';
import { getUser } from '../services/auth';

const Admin = () => {
    const user = getUser();
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadAdminData = async () => {
            try {
                const usersRes = await api.get('/admin/users');
                const tasksRes = await api.get('/admin/tasks');
                setUsers(usersRes.data);
                setTasks(tasksRes.data);
            } catch (error) {
                setMessage('Could not load admin data');
            }
        };

        if (user?.role === 'admin') {
            loadAdminData();
        }
    }, [user]);

    const handleDeleteTask = async (id) => {
        try {
            await api.delete(`/admin/tasks/${id}`);
            setTasks((prev) => prev.filter((task) => task._id !== id));
            setMessage('Task deleted');
        } catch (error) {
            setMessage('Delete failed');
        }
    };

    if (!user || user.role !== 'admin') {
        return (
            <div>
                <h2>Admin</h2>
                <div className="alert">Admin access required</div>
            </div>
        );
    }

    return (
        <div>
            <h2>Admin</h2>
            {message && <div className="alert">{message}</div>}

            <h3>Users</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u._id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan="3">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h3>All Tasks</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.createdBy?.email || 'Unknown'}</td>
                            <td>
                                <button
                                    type="button"
                                    className="danger"
                                    onClick={() => handleDeleteTask(task._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {tasks.length === 0 && (
                        <tr>
                            <td colSpan="4">No tasks found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
