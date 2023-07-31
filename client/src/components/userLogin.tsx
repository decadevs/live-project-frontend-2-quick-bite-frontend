import { useState, ChangeEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Add this line
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform authentication logic here and dispatch actions if needed
        navigate('/userdashboard');
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordValidation(passwordRegex.test(password));
        setPassword(e.target.value); // Set the password state here
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-edf0eb px-4"> 
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
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
                <div className="relative mb-4">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onFocus={() => setPasswordValidation(true)}
                        onBlur={() => setPasswordValidation(false)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <span
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleTogglePasswordVisibility}
                    >
                        {showPassword ? (
                            <i className="fas fa-eye-slash"></i>
                        ) : (
                            <i className="fas fa-eye"></i>
                        )}
                    </span>
                </div>
                {passwordValidation && (
                    <p className="text-green-500 text-sm mb-2">
                        Password should contain at least one uppercase letter, one lowercase letter,
                        one special character, and one number.
                    </p>
                )}
                <p className="text-black text-center mt-4 mb-4">
                    Login as a Vendor{' '}
                    <RouterLink to="/vendorlogin" className="text-blue-700 font-bold">
                        Vendor
                    </RouterLink>
                </p>
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
