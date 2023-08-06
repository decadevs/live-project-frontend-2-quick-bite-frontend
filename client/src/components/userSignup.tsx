import { useState, ChangeEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Input from './reusableComponents/input';
const SignupForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        otherGender: '',
        DOB: '',
        phoneNumber: '',
    });
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordValidation(passwordRegex.test(password));
        handleChange(e);
    };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Simulate saving user data to the postgres database
            console.log(user);
            setSignupSuccess(true);
            setTimeout(() => {
                navigate('/otp');
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen px-4 mt-12">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-black text-3xl font-bold text-center mb-4">User Sign Up</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <Input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <div className="relative mb-4">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            value={user.password}
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
                    <Input
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-deepBlue text-white rounded"
                    >
                        Sign up
                    </button>
                </form>
                {signupSuccess && (
                    <p className="text-green-500 text-center font-bold mt-4">
                        Sign up successful!
                    </p>
                )}
                <p className="text-black text-center mt-4">
                    Already have an account?{' '}
                    <RouterLink to="/login" className="text-deepBlue font-bold">
                        Log in
                    </RouterLink>
                </p>
                <p className="text-black text-center mt-4">
                    Register as a Vendor{' '}
                    <RouterLink to="/verifyVendor" className="text-deepBlue font-bold">
                        Click Here
                    </RouterLink>
                </p>
          
        
            </div>
        </div>
    );
};

export default SignupForm;
