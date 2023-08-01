import { useState } from 'react';
import {Link as RouterLink, useNavigate } from 'react-router-dom';
import Header from './Header';

const VendorRegNO = () => {
    const [regNo, setRegNo] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = () => {
       
        navigate('/vendor');
    };

    return (
        <>
       <Header/>
           <div className="flex justify-center items-center h-screen bg-edf0eb"> 
           
            <div className="w-1/3 p-8 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4">Vendor Registration Number</h2>
                <div className="mb-4">
                    {/* <label htmlFor="regNo" className="block font-medium">
                    RegNo
                    </label> */}
                    <input
                        type="text"
                        id="regNo"
                        placeholder="Enter Reg.No"

                        className="w-full p-2 border rounded"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        required
                    />
                </div>
            
                <button
                    className="w-full p-2 bg-deepBlue text-white rounded-xl"
                    onClick={handleLogin}
                >
                    Submit
                </button>

                <p className="text-black text-center mt-4">
                    Not a registered Vendor?{' '}
                    <RouterLink to="/register" className="text-blue-700 font-bold">
                      Click here to Sign up as a User
                    </RouterLink>
                </p>
            </div>
        </div>
        </>
     
    );
};

export default VendorRegNO;
