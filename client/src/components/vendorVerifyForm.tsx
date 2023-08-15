import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../utility/toast";
import axios from "../api/httpService";

// import Header from './Header';

const VendorRegNO = () => {
  const [regNo, setRegNo] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Simulate saving user data to the postgres database
      setLoading(true);

      const payload = {
        regNo,
      };

      const { data } = await axios.post("/vendor/verifyvendor", payload);
      showSuccessToast(data.message);

      localStorage.setItem("token", data.token);
      setRegNo("");
      setLoading(false);
      
      setTimeout(() => {
        navigate("/vendor");
      }, 2000)
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        showErrorToast(error.response.status);
      } else if (error.request) {
        showErrorToast("Internal Server Error");
      } else {
        showErrorToast(`Error, ${error.message}`);
      }
    }
  };

  return (
    <>
      {/* <Header/> */}
      <div className="flex justify-center items-center h-screen bg-edf0eb">
        <div className="w-1/3 p-8 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Vendor Verification Page</h2>
          <div className="mb-4">
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
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Verify"}
          </button>
          {/* <p className="text-black text-center mt-4">
                    Not a registered Vendor?{' '}
                    <RouterLink to="/register" className="text-green-800 font-bold">
                      Click here to Sign up as a User
                    </RouterLink>
                </p> */}
          <p className="text-black text-center mt-4">
            Not a registered business?{" "}
            <a
              href="mailto:your@email.com"
              className="text-green-800 font-bold"
            >
              Click here to Send an Email to Corporate Affairs Commission
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VendorRegNO;
