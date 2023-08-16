import CardsFood from './CardsFood';
import './Cards.css'
import Image from "../assets/1food.jpg"


const PopularFoodsCard = () => {

  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };
    return (
      <div>
        <div className="title-popularfoods" style={titleStyle}>
        <h1>Popular Foods</h1>
      </div>
      <CardsFood />
    </div>
  )
}

export default PopularFoodsCard;


