
import { useState, ChangeEvent, FormEvent } from 'react';

const UserUpdatesProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
         
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

 

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    
    return (
        <>
            {/* <Header /> */}
            <div className="flex justify-center items-center h-screen px-4">
                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <h1 className="text-black text-3xl font-bold text-center mb-4"> Update Your Profile</h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstNameOfUser"
                            value={user.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                           // required
                        />
                        <input
                            type="text"
                            placeholder="last Name"
                            name="lastNameOfUser"
                            value={user.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                           // required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                           // required
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                          //  required
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                          //  required
                        />
                       
              <div className='flex flex-row justify-between'>

              <button
                            type="submit"
                            className="w-1/3 p-2 bg-deepBlue text-white rounded mr-5">
                            Save 
                        </button>
                        <button
                            type="submit"
                            className="w-1/3 p-2 bg-deepBlue text-white rounded">
                            Cancel 
                        </button>
              </div>
                       

                        
                    </form>
                   
                </div>
            </div>
        </>

    );
};

export default UserUpdatesProfile;

