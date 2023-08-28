import CardSection from "../components/CardSection";
import { useEffect } from "react";
import "../styles/allVendorFoods.css";
import Header from "../components/Header";
import cover from "../assets/cover_photo.jpeg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSingleVendor } from "../slices/singleVendorSlice";

const AllVendorFoods = async () => {
  const foods = [
    {
      name: "Fried rice",
      description: "hot and spice ",
      id: 1,
      price: 1500,
    },
    { name: "Moi-moi", description: "hot and spice ", id: 2, price: 500 },
    { name: "Abacha", description: "hot and spice ", id: 3, price: 2000 },
    {
      name: "Grilled Chiken",
      description: "hot and spice ",
      id: 4,
      price: 3500,
    },
    { name: "Egusi & fufu", description: "hot and spice ", id: 5, price: 4000 },
  ];

  const vendor_data = {
    name: "Chicken Republic",
    cover_image: "../src/assets/cover_photo.jpeg",
    rating: 4.5,
  };

  // const dispatch = useAppDispatch();

  // const { vendor, isLoading } = useAppSelector(
  //   (state) => state.getSingleVendor
  // );

  // useEffect(() => {
  //   const vendorId = localStorage.getItem("vndorid");

  //   dispatch(getSingleVendor()).unwrap();
  // }, [dispatch]);

  //console.log(vendor, isLoading);
  return (
    <>
      <Header />
      <div>
        <div
          className="cover-photo"
          style={{ backgroundImage: `url(${vendor_data.cover_image})` }}
        >
          {/* <img src={cover} alt="" /> */}
        </div>
        <div className="vendorInfo">
          <h2>{vendor_data.name}</h2>
          <p>⭐️ 4.5 | Min order: N2500 | delivery: N1500</p>
        </div>
        <hr />
      </div>

      {foods.map((item) => (
        <CardSection
          name={item.name}
          description={item.description}
          price={item.price}
          item={item}
        />
      ))}
    </>
  );
};

export default AllVendorFoods;
