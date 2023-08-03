

import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Header from './Header';
const VendorPassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = () => {
       
        navigate('/vendordashboard');
    };

    return (
        <>
        <Header/>
          <div className="flex justify-center items-center h-screen bg-edf0eb px-4"> 
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Vendor Change Password </h2>
                <div className="mb-4">
                 
                    <input
                        type="password"
                        placeholder="Old password"
                        id="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  
                    <input
                        type="password"
                        placeholder="New password"
                        id="newPassword"
                        className="w-full p-2 border rounded"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    
                    <input
                        type="password"
                        placeholder="Confirm password"
                        id="confirmNewPassword"
                        className="w-full p-2 border rounded"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    className="w-full p-2 bg-deepBlue text-white rounded-xl"
                    onClick={handlePasswordChange}
                >
                    Change Password
                </button>
            </div>
        </div>
        </>
      
    );
};
console.log(RouterLink)
export default VendorPassword;
