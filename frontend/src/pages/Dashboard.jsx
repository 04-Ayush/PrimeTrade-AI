import { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
    const [tasksCount, setTasksCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const res = await api.get('/tasks');
                setTasksCount(res.data.length);
            } catch (error) {
                setMessage('Could not load tasks');
            }
        };

        loadTasks();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {message && <div className="alert">{message}</div>}
            <p>Total tasks: {tasksCount}</p>
        </div>
    );
};

export default Dashboard;
