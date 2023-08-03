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
    <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
    <div className={styles.popularFlex}>
        <h2 className={styles.popularText}>Foods</h2>
        <div onClick={handleClick} style={{cursor: "pointer"}}>
         {show ? <i className="fa-solid fa-chevron-up" style={{fontSize:"20px"}}></i> :<img src={Dropdown} alt="" className={styles.dropdown} /> }
         </div >
        </div>
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
        <div className={show ? styles.hide : ""}>
        <div className={styles.cardContainer}>
        <Link to="/4"> <div className={styles.Card}>
             <div className={styles.cardHead}>
                <img src={FoodOne} alt="" className="h-60 w-90" />
             </div>
             <div className={styles.cardBody}>
                <h2 className={styles.cardheading}>Bruncherie</h2>
                <p className={styles.cardText}>Breakfast , lunch, desserts</p>
             </div>
             <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
             <div className={styles.cardFooter}>
                <span className={styles.amount}>
                <Link to="/4"> <button className={`${styles.more} p-4 bg-deepBlue rounded-lg mt-7 text-white` }>Order Now</button></Link>
                </span>
                <span className={styles.totalAmount}>####</span>
             </div>
            </div></Link>
            <Link to="/4"> <div className={styles.Card}>
             <div className={styles.cardHead}>
                <img src={FoodOne} alt="" className="h-60 w-90" />
             </div>
             <div className={styles.cardBody}>
                <h2 className={styles.cardheading}>Bruncherie</h2>
                <p className={styles.cardText}>Breakfast , lunch, desserts</p>
             </div>
             <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
             <div className={styles.cardFooter}>
                <span className={styles.amount}>
                <Link to="/4"> <button className={`${styles.more} p-4 bg-deepBlue rounded-lg mt-7 text-white` }>Order Now</button></Link>
                </span>
                <span className={styles.totalAmount}>####</span>
             </div>
            </div></Link>
            <Link to="/4"> <div className={styles.Card}>
             <div className={styles.cardHead}>
                <img src={FoodOne} alt="" className="h-60 w-90" />
             </div>
             <div className={styles.cardBody}>
                <h2 className={styles.cardheading}>Bruncherie</h2>
                <p className={styles.cardText}>Breakfast , lunch, desserts</p>
             </div>
             <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
             <div className={styles.cardFooter}>
                <span className={styles.amount}>
                <Link to="/4"> <button className={`${styles.more} p-4 bg-deepBlue rounded-lg mt-7 text-white` }>Order Now</button></Link>
                </span>
                <span className={styles.totalAmount}>####</span>
             </div>
            </div></Link>

        </div>
   
        <div className="divider  w-70% md:min-w-full h-0.5 bg-deepBlue" ></div>
        </div>
        
  </div>
  )
}

export default AllFood