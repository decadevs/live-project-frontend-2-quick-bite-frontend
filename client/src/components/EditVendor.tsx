import { useState, ChangeEvent, MouseEvent, } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/EditVendor.css'

//bg-white p-8 rounded-xl shadow-lg
//fixed inset-0 flex justify-center items-center bg-black bg-opacity-50

interface EditVendorProps{
    handleClose: () => void
}
interface Vendor {
    nameOfOwner: string;
    restaurantName: string;
    email: string;
    phoneNumber: string;
    address: string;
    coverImage: File | null;
}

 // import Header from './Header';
const VendorEditProfile: React.FC<EditVendorProps> = ({handleClose}) => {
    const [vendor, setVendor] = useState<Vendor>({
        nameOfOwner: '',
        restaurantName: '',
        email: '',
        phoneNumber: '',
        address: '',
        coverImage: null as File | null
    });
//    const [editprofileSuccess, setEditProfileSuccess] = useState(false);
//   
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

    //  
      const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // handleClose();
            
            toast.error   ('Cancelled', {
                autoClose: 2000
    
         })

        
    };
    
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault();

        try {
            // Simulate saving user data to the postgres database
            console.log(vendor);
            toast.success ('successfully edited')
            // setEditProfileSuccess(true)
            ;
            setTimeout(() => {
               handleClose(); // closeModal();
                navigate('/vendordashboard');
            }, 2000);
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
                <>
                    <div className="flex justify-center items-center h-screen px-4">
                        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg wrapper">
                            <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile </h1>
        
                            {/* Button to open the modal */}
                            {/* <button
                                className="bg-deepBlue text-white rounded click-to-edit-button"
                                onClick={() => setEditProfileSuccess(true)}
                            >
                                Click to edit
                            </button> */}
        
                                {/* Modal structure */}
                                <div className="custom-form-container">
                                    <div className="custom-form-container">
                                        <form onSubmit={handleSubmit} className='form-edit'>
                                            {/* Input fields */}
                                            <input
                                                type="text"
                                                placeholder="Name Of Owner"
                                                name="nameOfOwner"
                                                value={vendor.nameOfOwner}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                            />
                                             <input
                                    type="text"
                                    placeholder="Name of Restaurant"
                                    name="restaurantName"
                                    value={vendor.restaurantName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={vendor.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                />
        
        <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    value={vendor.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={vendor.address}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                />
                                <label htmlFor="">Cover Image</label>
        
                                            {/* File input */}
                                            <input
                                                type="file"
                                                placeholder="Cover Image"
                                                accept="image/*"
                                                name="coverImage"
                                                onChange={handleFileChange}
                                                className="w-full p-2 border border-gray-300 rounded mb-4 input-width"
                                            />
        
                                            {/* Buttons */}
                                            <div id="profile" className='flex flex-row space-x-4'>
                                                <button
                                                    type="submit"
                                                    className="bg-deepBlue text-white rounded"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="bg-deepBlue text-white rounded"
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </>
            );
        };
        

//   

export default VendorEditProfile;


// return (
    //         <div className="fixed inset-0 flex items-center justify-center z-50">
    //             <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
    //                 <h1 className="text-3xl font-bold text-center mb-4">Vendor Edit Profile</h1>
    //                 <form className="mt-4" onSubmit={handleSubmit}>
    //                     {/* ... Input fields ... */}
    //                     <div className="flex justify-between mt-6">
    //                         <button
    //                             type="button"
    //                             className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600 transition"
    //                             onClick={handleCancel}
    //                         >
    //                             Cancel
    //                         </button>
    //                         <button
    //                             type="submit"
    //                             className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
    //                         >
    //                             Save
    //                         </button>
    //                     </div>
    //                 </form>
    //                 {editprofileSuccess && (
    //                     <p className="text-green-500 text-center font-bold mt-4">
    //                         Edit successful!
    //                     </p>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // };
    


//     return (
//         <>
//             <div className="flex justify-center items-center h-screen px-4">
//                 <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//                     <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile </h1>

//                     {/* Button to open the modal */}
//                     <button
//                         className="bg-deepBlue text-white rounded"
//                         onClick={() => setEditProfileSuccess(true)}
//                     >
//                         Click to edit
//                     </button>

//                     {editprofileSuccess && (
//                         // Modal structure
//                         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//                             <div className="bg-white p-8 rounded-xl shadow-lg">
//                                 <form onSubmit={handleSubmit}>
//                                     {/* Input fields */}
//                                     <input
//                                         type="text"
//                                         placeholder="Name Of Owner"
//                                         name="nameOfOwner"
//                                         value={vendor.nameOfOwner}
//                                         onChange={handleChange}
//                                         className="w-full p-2 border border-gray-300 rounded mb-4"
//                                     />
//                                      <input
//                             type="text"
//                             placeholder="Name of Restaurant"
//                             name="restaurantName"
//                             value={vendor.restaurantName}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             value={vendor.email}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />

// <input
//                             type="text"
//                             placeholder="Phone Number"
//                             name="phoneNumber"
//                             value={vendor.phoneNumber}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Address"
//                             name="address"
//                             value={vendor.address}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <label htmlFor="">Cover Image</label>

//                                     {/* File input */}
//                                     <input
//                                         type="file"
//                                         placeholder="Cover Image"
//                                         accept="image/*"
//                                         name="coverImage"
//                                         onChange={handleFileChange}
//                                         className="w-full p-2 border border-gray-300 rounded mb-4"
//                                     />

//                                     {/* Buttons */}
//                                     <div id="profile" className='flex flex-row space-x-4'>
//                                         <button
//                                             type="submit"
//                                             className="bg-deepBlue text-white rounded"
//                                         >
//                                             Save
//                                         </button>
//                                         <button
//                                             className="bg-deepBlue text-white rounded"
//                                             onClick={handleCancel}
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VendorEditProfile;


//     return (
//         <>
//             <div className="flex justify-center items-center h-screen px-4">
//                 <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//                     <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile </h1>

//                     {/* Button to open the modal */}
//                     <button
//                         className="bg-deepBlue text-white rounded"
//                         onClick={() => setEditProfileSuccess(true)}
//                     >
//                         Open Edit Modal
//                     </button>

//                     {editprofileSuccess && (
//                         // Modal structure
//                         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//                             <div className="bg-white p-8 rounded-xl shadow-lg">
//                                 <form onSubmit={handleSubmit}>
//                                     {/* Input fields */}
//                                     {/* ... */}

//                                     {/* File input */}
//                                     <input
//                                         type="file"
//                                         placeholder="Cover Image"
//                                         accept="image/*"
//                                         name="coverImage"
//                                         onChange={handleFileChange}
//                                         className="w-full p-2 border border-gray-300 rounded mb-4"
//                                     />

//                                     {/* Buttons */}
//                                     <div className="flex justify-end space-x-4">
//                                         <button
//                                             type="submit"
//                                             className="bg-deepBlue text-white rounded"
//                                         >
//                                             Save
//                                         </button>
//                                         <button
//                                             className="bg-deepBlue text-white rounded"
//                                             onClick={handleCancel}
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VendorEditProfile;

//     return (
//         <>
//             <div className="flex justify-center items-center h-screen px-4">
//                 <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//                     <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile </h1>

//                     {/* Button to open the modal */}
//                     <button
//                         className="bg-deepBlue text-white rounded"
//                         onClick={() => setEditProfileSuccess(true)}
//                     >
//                         Open Edit Modal
//                     </button>

//                     {editprofileSuccess && (
//                         // Modal structure
//                         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//                             <div className="bg-white p-8 rounded-xl shadow-lg">
//                                 <form onSubmit={handleSubmit}>
//                                     {/* Input fields */}
//                                     {/* ... */}

//                                     {/* Buttons */}
//                                     <div className="flex justify-end space-x-4">
//                                         <button
//                                             type="submit"
//                                             className="bg-deepBlue text-white rounded"
//                                         >
//                                             Save
//                                         </button>
//                                         <button
//                                             className="bg-deepBlue text-white rounded"
//                                             onClick={handleCancel}
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VendorEditProfile;

    
//     return (
//         <>
//             {/* <Header /> */}
//             <div className="flex justify-center items-center h-screen px-4">
                

//                 <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//                     <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile  </h1>
//                     <form className="mt-4" onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             placeholder="Name Of Owner"
//                             name="nameOfOwner"
//                             value={vendor.nameOfOwner}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Name of Restaurant"
//                             name="restaurantName"
//                             value={vendor.restaurantName}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             value={vendor.email}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Phone Number"
//                             name="phoneNumber"
//                             value={vendor.phoneNumber}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Address"
//                             name="address"
//                             value={vendor.address}
//                             onChange={handleChange}
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <label htmlFor="">Cover Image</label>
//                         <input
//                             type="file"
//                             placeholder="Cover Image"
//                             accept="image/*" // Allow only image files
//                             name="coverImage"
//                             onChange={handleFileChange} // Handle file input change
//                             className="w-full p-2 border border-gray-300 rounded mb-4"
//                         />
//                         <div id="profile" className='flex flex-row space-x-4'>


//                         <button type="submit" className="w-full p-2 bg-deepBlue text-white rounded"
//                         //  onClick={handleSubmit}
//                         >
//                             Save
//                         </button>

//                         <button  className="w-full p-2 bg-deepBlue text-white rounded"
//                         onClick={handleCancel}
//                         >
//                         Cancel
//                         </button>
//                         </div>


//                     {editprofileSuccess && (
//                         <p className="text-green-500 text-center font-bold mt-4">
//                             Edit successful!
//                         </p>  
//                     )}
//                 </form>
                       

//                 </div>
//             </div>    
            
//         </>

//     );
// };

// export default VendorEditProfile;

