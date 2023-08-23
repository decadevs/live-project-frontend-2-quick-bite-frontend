import "./Cards.css";
import Image from "../assets/white-rice.jpg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPopularFood } from "../slices/popularSlice";
import { useEffect } from "react";


const CardsFood = () => {
    const dispatch = useAppDispatch();

    const {popularFood, isLoading} = useAppSelector((state) => state.popularFood)

    console.log(isLoading, popularFood)
    useEffect(() => {
        dispatch(getPopularFood())
    }, [dispatch])

    return (
        <div className="wrapper">

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
            </div>

        </div>
    );
};

export default CardsFood;
