// import CardsFood from './CardsFood'

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from "react";
import { getAllFoodCount } from '../slices/getAllFoodCountSlice';
import './Cards.css'
import { Link } from "react-router-dom";
import Image1 from "../assets/4.food.jpg"
import Image from "../assets/white-rice.jpg"


const AllFoodsCard = () => {

  const dispatch = useAppDispatch();
  const {allFoodCount, isLoading} = useAppSelector((state) => state.allFoodCount)

  console.log(allFoodCount, isLoading)

useEffect(()=> {
  dispatch(getAllFoodCount())
}, [dispatch])

  const titleStyle = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'cover', // Adjust as needed
    width: '100%',
    height: '420px',
    
   

  };
    return (
      <div>
        <div className="title-AllFoods" style={titleStyle}>
        <h1 className='all-foods'>All Foods</h1>
      </div>
      <div className="wrapper">
{allFoodCount?.map((item, index) => (
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content" key={index}>
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <Link to="/allvendorfoods">
            <button>
                <a className="view">view more</a>
            </button>
        </Link>
    </div>
</div> ))}
{/* <div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <Link to="/allvendorfoods">
            <button>
                <a className="view">view more</a>
            </button>
        </Link>
    </div>
</div>
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>
<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>

<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div>

<div className="card-container">
    <div className="image-container">
        <img src={Image} alt="" />
    </div>
    <div className="card-content">
        <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>Vendors food</h3>
        </div>
        <div className="card-body">
            <p>Deliciousness served in every bite....</p>
        </div>
        <div className="btn"></div>

        <button>
            <a className="view">view more</a>
        </button>
    </div>
</div> */}

</div>
      </div>


    )
  }
  export default AllFoodsCard