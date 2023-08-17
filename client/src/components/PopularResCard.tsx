import Cards from "./Cards"
import './Cards.css'
import Image from "../assets/1restuarant.jpg"

const PopularResCard = () => {
  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };

  return (
    <div>
      <div className="title-popular-restaurants" style={titleStyle}>
        <h1>Popular Restaurants</h1>
      </div>
      <Cards />
    </div>
  )
}

export default PopularResCard

