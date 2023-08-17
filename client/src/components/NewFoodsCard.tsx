import CardsFood from './CardsFood';
import './Cards.css'
import Image from "../assets/fried-rice.jpg"


const NewFoodsCard = () => {

  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };
    return (
      <div>
        <div className="title-newfoods" style={titleStyle}>
        <h1>New on QuickBite</h1>
      </div>
      <CardsFood />
    </div>
  )
}

export default NewFoodsCard;



