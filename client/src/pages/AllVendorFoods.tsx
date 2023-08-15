import CardSection from "../components/CardSection";
import "../styles/allVendorFoods.css";
import VendorHeader from "../components/VendorHeader";

const AllVendorFoods = () => {
  let foods = [
    {
      name: "Fried riceusd hiisdh hsdhi sijdfj gfahjdsd dsh",
      description:
        "hot and spice tdguhdu huhusdhu sygsygduud dyguiyus gugfsyug f fhgygdfygf uuosgfoifi ",
    },
    { name: "Moi-moi", description: "hot and spice " },
    { name: "Abacha", description: "hot and spice " },
    { name: "Grilled Chiken", description: "hot and spice " },
    { name: "Egusi & fufu", description: "hot and spice " },
  ];

  const handleFoodEdit = (name: string, description: string) => {
    // Implement the logic to update the food list when the Save button is clicked.
    // For this example, we'll just update the state of the foods array with the edited data.

    const updatedFoods = foods.map((food) =>
      food.name === name ? { ...food, description } : food
    );

    console.log(name);

    // Update the foods array with the edited data
    foods = updatedFoods;
  };

  return (
    <>
      <VendorHeader />
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
          onEdit={handleFoodEdit}
        />
      ))}
    </>
  );
};

export default AllVendorFoods;
