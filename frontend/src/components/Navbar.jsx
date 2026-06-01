import { Link, useNavigate } from 'react-router-dom';
import { clearToken, getUser, isLoggedIn } from '../services/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const loggedIn = isLoggedIn();
    const user = getUser();

    const handleLogout = () => {
        clearToken();
        navigate('/login');
    };

    return (
        <div className="navbar">
            <div className="navbar-inner">
                <Link to="/dashboard">Task Manager</Link>
                <div className="nav-links">
                    {!loggedIn && (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                    {loggedIn && (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/tasks">Tasks</Link>
                            {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
                            <button type="button" className="secondary" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
