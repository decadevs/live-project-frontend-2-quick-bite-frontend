
import { useState, ChangeEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Input from './reusableComponents/input';
import { showErrorToast, showSuccessToast } from "../utility/toast";
import axios from "../api/httpService";
import Header from './Header';

const initialData = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
}

const UserChangePassword = () => {
    const [passwordDetails, setPasswordDetails] = useState(initialData);
    const [loading, setLoading] = useState(false);
    // const [newPassword, setNewPassword] = useState('');
    // const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setPasswordDetails((prevDetails)=>{
            return {
                ...prevDetails,
                [name]: value
            }
        })
    };
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            setLoading(true)

            const payload = {
                ...passwordDetails
            }
          const { data } = await axios.post("/user/changePassword", payload);

          localStorage.setItem("token", data.token)
          setPasswordDetails(initialData);
          showSuccessToast(data.message);
          setLoading(false);
    
          navigate('/userlanding');

        // eslint-disable-next-line 
        } catch (error: any) {
          setLoading(false);
          if (error.response) {
            showErrorToast(error.response.data.message);
          } else if (error.request) {
            showErrorToast("Internal Server Error");
          } else {
            showErrorToast(`Error, ${error.message}`);
          }
        }
      };
    return (
        <>
        { <Header/> }
          <div className="flex justify-center items-center h-screen bg-edf0eb px-4"> 
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">User Change Password </h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Input
                        type="password"
                        placeholder="Old password"
                        id="password"
                        name="oldPassword"
                        className="w-full p-2 border rounded"
                        value={passwordDetails.oldPassword}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="mb-4">
                  
                    <Input
                        type="password"
                        placeholder="New password"
                        id="newPassword"
                        name="newPassword"
                        className="w-full p-2 border rounded"
                        value={passwordDetails.newPassword}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="mb-4">
                    
                    <Input
                        type="password"
                        placeholder="Confirm password"
                        id="confirmNewPassword"
                        name="confirmPassword"
                        className="w-full p-2 border rounded"
                        value={passwordDetails.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

                <button
                    className="w-full p-2 bg-deepBlue text-white rounded-xl"
                    type= "submit"
                >
                    {loading ? 'loading...' : "Change Password"}
                </button>
                </form>
            </div>
        </div>
        </>
      
    );
};
console.log(RouterLink)
export default UserChangePassword;
