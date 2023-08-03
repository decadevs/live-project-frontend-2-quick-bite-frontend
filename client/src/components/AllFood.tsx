import React from 'react'
import  { MouseEventHandler,  useState } from 'react';
import styles from "../styles/popular.module.css"
import Dropdown from "../assets/dropdown.svg"
import  FoodOne from "../assets/food1.png"
import { Link } from 'react-router-dom';

const AllFood = () => {
    const[show, setShow] = useState(false)

  
    const handleClick : MouseEventHandler<HTMLImageElement>=()=>{
      setShow(!show)
    }
  return (
    <div id="pFood" className={styles.popular}>
    <div className="divider  w-70% md:min-w-full h-0.5 bg-deepBlue" ></div>
    <div className={styles.popularFlex}>
        <h2 className={styles.popularText}>Foods</h2>
        <div onClick={handleClick} style={{cursor: "pointer"}}>
         {show ? <i className="fa-solid fa-chevron-up" style={{fontSize:"20px"}}></i> :<img src={Dropdown} alt="" className={styles.dropdown} /> }
         </div >
        </div>
        <div className="divider  w-70% md:min-w-full h-0.5 bg-deepBlue" ></div>
        <div className={show ? styles.hide : ""}>
        <div className={styles.cardContainer}>
        <Link to="/4"> <div className={styles.Card}>
             <div className="cardHead">
                <img src={FoodOne} alt="" />
             </div>
             <div className="cardBody">
                <h2>Bruncherie</h2>
                <p>Breakfast , lunch, desserts</p>
             </div>
             <div className={styles.cardFooter}>
                <span>
                    <img src="" alt="" />
                    $3.26
                </span>
                <span>$$$$</span>
             </div>
            </div></Link>
            <Link to="/4"> <div className={styles.Card}>
             <div className="cardHead">
                <img src={FoodOne} alt="" />
             </div>
             <div className="cardBody">
                <h2>Bruncherie</h2>
                <p>Breakfast , lunch, desserts</p>
             </div>
             <div className={styles.cardFooter}>
                <span>
                    <img src="" alt="" />
                    $3.26
                </span>
                <span>$$$$</span>
             </div>
            </div></Link>
            <Link to="/4"> <div className={styles.Card}>
             <div className="cardHead">
                <img src={FoodOne} alt="" />
             </div>
             <div className="cardBody">
                <h2>Bruncherie</h2>
                <p>Breakfast , lunch, desserts</p>
             </div>
             <div className={styles.cardFooter}>
                <span>
                    <img src="" alt="" />
                    $3.26
                </span>
                <span>$$$$</span>
             </div>
            </div></Link>

        </div>
   
        <div className="divider  w-70% md:min-w-full h-0.5 bg-deepBlue" ></div>
        </div>
        
  </div>
  )
}

export default AllFood