import Cards from "./Cards"
import './Cards.css'
import Image from "../assets/volkan-vardar-1H30uRC1plc-unsplash.jpg"

const Cardlist = () => {
  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };

  return (
    <div>
      <div className="title-restaurants" style={titleStyle}>
        <h1>All Restaurants</h1>
      </div>
      <Cards />
    </div>
  );
}

export default Cardlist;