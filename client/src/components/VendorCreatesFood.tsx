import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TextField from "./InputAdornment";

interface Vendor {
  name: string;
  price: string;
  readyTime: string;
  foodImage: File | null;
}

const VendorCreatesFood = () => {
  const [vendor, setVendor] = useState<Vendor>({
    name: "",
    price: "",
    readyTime: "",
    foodImage: null as File | null,
  });

  const [createFoodSuccess, setCreateFoodSuccess] = useState(false);
   console.log(createFoodSuccess)
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVendor((prevVendor) => ({
      ...prevVendor,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const file = files && files[0];
    if (file) {
      setVendor((prevVendor) => ({ ...prevVendor, foodImage: file }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(vendor);
      setCreateFoodSuccess(true);

      const Toast = Swal.mixin({
        toast: true,
        width: "30%",
        position: "top",
        title: "Food Created Successfully",
        showConfirmButton: false,
        timer: 3000,
      });
      Toast.fire({
        icon: "success",
        title: "Food Created Successfully",
      });

      navigate("/vendorLogin");
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-black text-3xl font-bold text-center mb-4">
            Create Food
          </h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Food Name"
              name="name"
              value={vendor.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <div className="mb-4">
              <TextField
                value={vendor.price}
                handleChange={handleChange}
                name="price"
                required
                adornment="₦"
                type="number"
                placeholder="Price"
              />
            </div>

            <input
              type="number"
              placeholder="Ready Time"
              name="readyTime"
              value={vendor.readyTime}
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
            <button
              type="submit"
              className="w-full p-2 bg-deepBlue text-white rounded"
            >
              Create Food
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VendorCreatesFood;
