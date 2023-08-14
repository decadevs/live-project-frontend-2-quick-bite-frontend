import { useState, ChangeEvent, MouseEvent, } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



 // import Header from './Header';
const VendorEditProfile: React.FC = () => {
    const [vendor, setVendor] = useState({
        nameOfOwner: '',
        restaurantName: '',
        email: '',
        phoneNumber: '',
        address: '',
        coverImage: null as File | null
    });
   const [editprofileSuccess, setEditProfileSuccess] = useState(false);
//    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [editprofileSuccess, setEditProfileSuccess] = useState(false);
    
    // const [passwordValidation, setPasswordValidation] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVendor((prevVendor) => ({
            ...prevVendor,
            [name]: value
        }));
    };

    // const handleCancel = (e: ChangeEvent<HTMLInputElement>) => {
    //     const 
    // }

 

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget;
        const file = files && files[0];
    
        if (file) {
          setVendor((prevVendor) => ({ ...prevVendor, coverImage: file }));
        }
      };

    //   const openModal = () => {
    //     setIsModalOpen(true);
    //   };

    //   const closeModal = () => {
    //     setIsModalOpen(false);
    //   };

      const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
            // const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
            // e.stopPropagation();
            // setVendor({
            //     nameOfOwner: '',
            //     restaurantName: '',
            //     email: '',
            //     phoneNumber: '',
            //     address: '',
            //     coverImage: null,

            // });
            // closeModal();
            toast.error('Cancelled', {
                autoClose: 3000
    

        // try {
        //     console.log(vendor)
        //     toast.error('Cancelled', {
        //     autoClose: 3000
        //     });
        //     // setTimeout(() => {
        //     //     // navigate('/');
        //     // }, 3000);
        // } catch (error) {
        //     console.error(error);
         })

        
    };
    
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault();

        try {
            // Simulate saving user data to the postgres database
            console.log(vendor);
            toast.success('successfully edited')
            setEditProfileSuccess(true)
            ;
            setTimeout(() => {
                // closeModal();
                navigate('/dashboard');
            }, 2000);
            
        } catch (error) {
            console.error(error);
        }
    };

    // const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     try {

    //         console.log(vendor);
    //         // toast.success("Profile edited sucessfullly");
    //          setEditProfileSuccess(true);
    //         setEditProfileSuccess();

    //         setTimeout(() => {
               
    //             navigate('/dashbord');
    //         }, 2000);
    //     } catch (error) {
    //         toast.error("Editancelled")
    //     }
    // };

    return (
        <>
            {/* <Header /> */}
            <div className="flex justify-center items-center h-screen px-4">
                {/* <button onClick={openModal}>View Edited Profile</button>
                </div> */}

                {/* <Modal
                isOpen={isModalOpen}
                onRequstClose={closeModal}
                contentLabel="EditProfile Modal"
                > */}

                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <h1 className="text-black text-3xl font-bold text-center mb-4"> Vendor Edit Profile  </h1>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name Of Owner"
                            name="nameOfOwner"
                            value={vendor.nameOfOwner}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Name of Restaurant"
                            name="restaurantName"
                            value={vendor.restaurantName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={vendor.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={vendor.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={vendor.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <label htmlFor="">Cover Image</label>
                        <input
                            type="file"
                            placeholder="Cover Image"
                            accept="image/*" // Allow only image files
                            name="coverImage"
                            onChange={handleFileChange} // Handle file input change
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <div id="profile" className='flex flex-row space-x-4'>


                        <button type="submit" className="w-full p-2 bg-deepBlue text-white rounded"
                        //  onClick={handleSubmit}
                        >
                            Save
                        </button>

                        <button  className="w-full p-2 bg-deepBlue text-white rounded"
                        onClick={handleCancel}
                        >
                        Cancel
                        </button>
                        </div>


                    {/* </form> */}
                    {editprofileSuccess && (
                        <p className="text-green-500 text-center font-bold mt-4">
                            Edit successful!
                        </p>  
                    )}
                </form>
                       

                </div>
            </div>    
            
            {/* </Modal> */}
        </>

    );
};

export default VendorEditProfile;

