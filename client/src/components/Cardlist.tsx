// import Cards from "./Cards"

import { Link } from "react-router-dom";
import './Cards.css'
import Image from "../assets/volkan-vardar-1H30uRC1plc-unsplash.jpg"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { getAllRestaurant } from "../slices/getAllRestaurantSlice";

const Cardlist = () => {

  const dispatch = useAppDispatch();

  const {allRestaurant, isLoading} = useAppSelector((state) => state.allRestaurant)

  console.log(isLoading, allRestaurant)
  useEffect(() => {
      dispatch(getAllRestaurant())
  }, [dispatch])


  const titleStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };


  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };


  return (

<div>
<div className="title-restaurants" style={titleStyle}>
<h1 className='all-restaurants' >All Restaurants</h1>
</div>
<div className="wrapper">
{allRestaurant?.map((item, index) => (

    <div className="card-container" key={index}>
        <div className="image-container">
            <img src={item.cover_image} alt="" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>{item.restaurant_name}</h3>
            </div>
            <div className="card-body">
                <p> {item.isAvailable}</p>
                <p className="rating">
                  {" "}
                  Rating :
                  <span className="star"> {renderStars(item.rating)} </span>
                </p>
              </div>

            <Link to="/allvendorfoods">
                <button
                  onClick={() => localStorage.setItem("vendorid", item.id)}
                >
                  <a className="view">Order Now</a>
                </button>
              </Link>
        </div>
    </div>))}
    </div>
</div>
)
}

export default Cardlist;