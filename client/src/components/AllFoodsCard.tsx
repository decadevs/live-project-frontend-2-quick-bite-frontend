import CardsFood from './CardsFood'
import './Cards.css'
import Image from "../assets/4.food.jpg"


const AllFoodsCard = () => {

  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'cover', // Adjust as needed
    width: '100%',
    height: '420px',
    
   

  };
    return (
      <div>
        <div className="title-AllFoods" style={titleStyle}>
        <h1>All Foods</h1>
      </div>
        <CardsFood />
      </div>


    )
  }
  export default AllFoodsCard