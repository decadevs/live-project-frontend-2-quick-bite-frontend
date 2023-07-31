import { useState, ChangeEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const VendorSignupForm = () => {
    const [vendor, setVendor] = useState({
        nameOfOwner: '',
        restaurantName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });
    const [signupSuccess, setSignupSuccess] = useState(false);
    // const [passwordValidation, setPasswordValidation] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVendor((prevVendor) => ({
            ...prevVendor,
            [name]: value
        }));
    };

  

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Simulate saving user data to the MongoDB database
            console.log(vendor);
            setSignupSuccess(true);
            // Delay navigation to login page for better user experience
            setTimeout(() => {
                navigate('/vendorLogin');
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm mx-auto">
                <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Sign up</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="text"
                        placeholder="Name Of Owner"
                        name="nameOfOwner"
                        value={vendor.nameOfOwner}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Name of Restaurant"
                        name="restaurantName"
                        value={vendor.restaurantName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={vendor.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                  
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={vendor.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        name="Address"
                        value={vendor.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-deepBlue text-white rounded"
                    >
                       Vendor Sign up
                    </button>
                </form>
                {signupSuccess && (
                    <p className="text-green-500 text-center font-bold mt-4">
                        Sign up successful!
                    </p>
                )}
                <p className="text-black text-center mt-4">
                    Already have an account?{' '}
                    <RouterLink to="/vendorlogin" className="text-blue-700 font-bold">
                      Click here Login
                    </RouterLink>
                </p>
               
            </div>
        </div>
    );
};

export default VendorSignupForm;
