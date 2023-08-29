import CardSection from "../components/CardSection";
import "../styles/allVendorFoods.css";
import Header from "../components/Header";
import HeaderNotAuth from "../components/HeaderNotAuth"

const AllVendorFoods = () => {
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

  return (
    <>
              {
        localStorage.getItem('token') ? <Header/> :<HeaderNotAuth/>
        
        }
      <div>
        <div className="cover-photo">
          {/* <img src={cover_photo} alt="" /> */}
        </div>
        <div className="vendorInfo">
          <h2>Chicken Republic</h2>
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
