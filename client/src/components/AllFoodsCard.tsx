
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from "react";
import { getUserAllFoods } from '../slices/userGetAllFoodSlice';
import './Cards.css'
import { Link } from "react-router-dom";
import Image1 from "../assets/all-foods.jpg"



const AllFoodsCard = () => {

  const dispatch = useAppDispatch();
  const {allFoods, isLoading} = useAppSelector((state) => state.userAllFood)

  console.log(allFoods, isLoading)

useEffect(()=> {
  dispatch(getUserAllFoods())
}, [dispatch])

  const titleStyle = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'cover', 
    width: '100%',
    height: '420px',
    
   

  };
    return (
      <div>
        <div className="title-AllFoods" style={titleStyle}>
        <h1 className='all-foods'>All Foods</h1>
      </div>
      <div className="wrapper">

{allFoods?.map((item, index) => (

<div className="card-container">
    <div className="image-container">
        <img src={item.food_image} alt="" />
    </div>
    <div className="card-content" key={index}>
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>{item.name}</h3>
        </div>
        <div className="card-body">
            <p>{item.description}</p>
        </div>
        <div className="btn"></div>

        <Link to="/allvendorfoods">
            <button>
                <a className="view">Order now</a>
            </button>
        </Link>
    </div>
</div> ))}

</div>
      </div>


    )
  }
  export default AllFoodsCard
