import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform authentication logic here and dispatch actions if needed
        navigate('/userdashboard');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-edf0eb"> 
            <div className="w-1/3 p-8 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4">User Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full p-2 bg-deepBlue text-white rounded-xl"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
