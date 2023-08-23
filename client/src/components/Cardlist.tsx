// import Cards from "./Cards"
import './Cards.css'
import Image1 from "../assets/volkan-vardar-1H30uRC1plc-unsplash.jpg"
import Image from "../assets/restaurant-background.jpg";
const Cardlist = () => {
  const titleStyle = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%',
    height: '420px'
  };

  return (
    <div>
      <div className="title-restaurants" style={titleStyle}>
        <h1 className=" all-restaurants" >All Restaurants</h1>
      </div>
      <div className="wrapper">
     

      <div className="card-container">
        <div className="image-container">
          <img src={Image} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors </h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors </h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors </h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal....</p>
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
            <h3 style={{ fontSize: '1.5rem', color: 'darkgreen', fontWeight: 'bold' }}>Vendors</h3>
          </div>
          <div className="card-body">
            <p>Bringing flavors to life, making every meal...</p>
          </div>
          <div className="btn"></div>

          <button>
            <a className="view">view more</a>
          </button>
        </div>
      </div>


    </div>
    </div>
  );
}

export default Cardlist;