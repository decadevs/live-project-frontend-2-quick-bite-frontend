import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TextField from "./InputAdornment";
import Modal from "../components/reusableComponents/Modal";
//import Food from "./Food";
import axios from "../api/httpService";
import { showSuccessToast, showErrorToast } from "../utility/toast";

interface VendorCreatesFoodProps {
  handleClose: () => void;
  show: boolean;
}
interface Food {
  name: string;
  price: string;
  readyTime: string;
  description: string;
  foodImage: File | null;
}

//const { name, price, food_image, ready_time, description } = req.body;

const VendorCreatesFood = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(!showModal)} className="ml-96 bg-deepBlue hover:bg-deepBlue-600 text-white font-bold text-m mt-10 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" >Create Food</button>
      <VendorChild
        show={showModal}
        handleClose={() => setShowModal(!showModal)}
      />
    </>
  );
};

const VendorChild: React.FC<VendorCreatesFoodProps> = ({
  show,
  handleClose,
}) => {

  const initialData: Food = {
    name: "",
    price: "",
    readyTime: "",
    description: "",
    foodImage: null as File | null,

  }
  const [createFood, setCreateFood] = useState(initialData);

  const [createFoodSuccess, setCreateFoodSuccess] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (file) {
      setCreateFood((prevFood) => ({ ...prevFood, foodImage: file }));
    }
  };

  // console.log(Food);

  const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // console.log(vendor);
      setCreateFoodSuccess(true);
      setLoading(true)

      const formData = new FormData()

      formData.append("name", createFood.name)
      formData.append("price", createFood.price)
      formData.append("readyTime", createFood.readyTime)
      formData.append("description", createFood.description)
      formData.append("foodImage", createFood.foodImage as Blob)

      const {data} = await axios.post("/vendor/createfood", formData)

      console.log(data)

      setCreateFood(initialData)
      showSuccessToast(data.message)
      setLoading(false)
      navigate("/vendorLogin");
      // const Toast = Swal.mixin({
      //   toast: true,
      //   width: "30%",
      //   position: "top",
      //   title: "Food Created Successfully",
      //   showConfirmButton: false,
      //   timer: 3000,
      // });
      // Toast.fire({
      //   icon: "success",
      //   title: "Food Created Successfully",
      // });

     
    } catch (error:any) {
      console.error(error);
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
    <div className="ml-96 mt-10">
      {show ? (
        <div className="w-full max-w-md p-8 bg-white">
          <h1 className="text-black text-3xl font-bold text-center mb-4">
            Create Food
          </h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Food Name"
              name="name"
              value={createFood.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <div className="mb-4">
              <TextField
                value={createFood.price}
                handleChange={handleChange}
                name="price"
                required
                adornment="₦"
                type="number"
                placeholder="Price"
              />
            </div>

            <input
              type="text"
              placeholder="Ready Time"
              name="readyTime"
              value={createFood.readyTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <input
              type="text-Area"
              placeholder="Description"
              name="description"
              value={createFood.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label htmlFor="foodImage">Food Image:</label>

            <input
              type="file"
              accept="image/*"
              name="foodImage"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />
            {/* <button
              type="submit"
              className="w-full p-2 bg-deepBlue text-white rounded"
            >
              Create Food
            </button> */}

            <div className="flex items-center justify-end">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-deepBlue hover:bg-deepBlue-600  text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="submit"
                // onClick={handleClose}
              >
                {loading? "Looading...": "Create Food"}
                <Modal />
              </button>
            </div>
          </form>
        </div>
        ) : null}
      </div>
    </>
  );
};

export default VendorCreatesFood;
