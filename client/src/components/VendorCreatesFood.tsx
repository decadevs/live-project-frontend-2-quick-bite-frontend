import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import Swal from "sweetalert2";
import TextField from "./InputAdornment";
import Input from "./reusableComponents/input";
import Modal from "../components/reusableComponents/Modal";
//import Food from "./Food";
import axios from "../api/httpService";
import { showSuccessToast, showErrorToast } from "../utility/toast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllFoodCount } from "../slices/getAllFoodCountSlice";

interface VendorCreatesFoodProps {
  handleClose: () => void;
  show: boolean;
}
interface Food {
  name: string;
  price: string;
  ready_time: string;
  description: string;
  food_image: File | null;
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
    ready_time: "",
    description: "",
    food_image: null as File | null,

  }
  const [createFood, setCreateFood] = useState(initialData);
  const dispatch = useAppDispatch();
  const [createFoodSuccess, setCreateFoodSuccess] = useState(false);
  const [loading, setLoading] = useState(false)

   console.log(createFoodSuccess)
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
      setCreateFood((prevFood) => ({ ...prevFood, food_image: file }));
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
      formData.append("ready_time", createFood.ready_time)
      formData.append("description", createFood.description)

      if (createFood.food_image) {
        formData.append("food_image", createFood.food_image);
      }

      const {data} = await axios.post("/vendor/createfood", formData)

      setCreateFood(initialData)
      showSuccessToast(data.message)
      setLoading(false)
        dispatch(getAllFoodCount());
      // navigate("/vendorLogin");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              placeholder="Ready Time (eg: 20 minutes)"
              name="ready_time"
              value={createFood.ready_time}
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

            <label htmlFor="food_image">Food Image:</label>

            <Input
              type="file"
              id="file"
              placeholder="Food Image"
              accept="image/*" // Allow only image files
              name="food_image"
              onChange={handleFileChange} // Handle file input change
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
              value={null}
            />

            {/* <input
              type="file"
              accept="image/*"
              name="food_image"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            /> */}



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
