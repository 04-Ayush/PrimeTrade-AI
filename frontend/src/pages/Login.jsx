import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { setToken, setUser } from '../services/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await api.post('/auth/login', { email, password });
            setToken(res.data.token);
            setUser(res.data.user);
            navigate('/dashboard');
        } catch (error) {
            const msg = error.response?.data?.message || 'Login failed';
            setMessage(msg);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {message && <div className="alert">{message}</div>}
            <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                New user? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;
