import { useState, ChangeEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Input from './reusableComponents/input';
// import Header from './Header';
const VendorSignupForm = () => {
    const [vendor, setVendor] = useState({
        nameOfOwner: '',
        restaurantName: '',
        email: '',
        phoneNumber: '',
        address: '',
        coverImage: null as File | null
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

 

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget;
        const file = files && files[0];
    
        if (file) {
          setVendor((prevVendor) => ({ ...prevVendor, coverImage: file }));
        }
      };



    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            console.log(vendor);
            setSignupSuccess(true);

            setTimeout(() => {
                navigate('/vendorLogin');
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {/* <Header /> */}
            <div className="flex justify-center items-center h-screen px-4">
                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Sign up</h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <Input
                            type="text"
                            placeholder="Name Of Owner"
                            name="nameOfOwner"
                            value={vendor.nameOfOwner}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Name of Restaurant"
                            name="restaurantName"
                            value={vendor.restaurantName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={vendor.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />

                        <Input
                            type="text"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={vendor.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={vendor.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <label htmlFor="">Cover Image</label>
                        <Input
                            type="file"
                            placeholder="Cover Image"
                            accept="image/*" // Allow only image files
                            name="coverImage"
                            onChange={handleFileChange} // Handle file input change
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required value={null}                        
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
                        <RouterLink to="/vendorlogin" className="text-green-800 font-bold">
                            Click here to Login
                        </RouterLink>
                    </p>
                </div>
            </div>
        </>

    );
};

export default VendorSignupForm;

