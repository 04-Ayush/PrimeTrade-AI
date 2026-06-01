import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Tasks from './pages/Tasks.jsx';
import Admin from './pages/Admin.jsx';
import RequireAuth from './components/RequireAuth.jsx';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/tasks"
                        element={
                            <RequireAuth>
                                <Tasks />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <RequireAuth>
                                <Admin />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
