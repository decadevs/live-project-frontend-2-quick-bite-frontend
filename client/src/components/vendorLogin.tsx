import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const VendorLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
       
        navigate('/vendordashboard');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-edf0eb px-4"> 
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Vendor Login</h2>
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
                       Vendor Password
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
                    Vendor Login
                </button>
                <p className="text-black text-center mt-4">
                    Don't have an account?{' '}
                    <RouterLink to="/vendor" className="text-blue-700 font-bold">
                      Sign up as a Vendor
                    </RouterLink>
                </p>


                <p className="text-black text-center mt-4">
                    Received an email?{' '}
                    <RouterLink to="/vendorPassword" className="text-blue-700 font-bold">
                      Click here to change password
                    </RouterLink>
                </p>
            </div>
        </div>
    );
};

export default VendorLoginForm;
