// import { useState } from "react"
import  { MouseEventHandler, useState, useEffect } from 'react';
import Dropdown from "../assets/dropdown.svg"
import styles from "../styles/newQuickbite.module.css"
import  FoodOne from "../assets/food1.png"
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getNewFoods } from '../slices/newFoodsSlice';
import spinner from  "../assets/spinner.gif"


const NewQuickbite = () => {
 const[show, setShow] = useState(false)
 const dispatch = useAppDispatch();
 const { newFood, isLoading } = useAppSelector((state) => state.newFood);
 console.log({newFood, isLoading})

 useEffect(()=>{
     dispatch(getNewFoods())
 },[dispatch])
   // const [show, setShow] = useState(true)
  const handleClick : MouseEventHandler<HTMLImageElement>=()=>{
    setShow(!show)
  }
 
  return (
  <div id='newQUICK' className={styles.newQuick}>
 <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
    <div className={styles.newQuickFlex}>
        <h2 className={styles.newQuickText}>New on QuickBite</h2>
         <div onClick={handleClick} style={{cursor: "pointer"}}>
         {show ? <i className="fa-solid fa-chevron-up" style={{fontSize:"20px"}}></i> :<img src={Dropdown} alt="" className={styles.dropdown} /> }
         </div >
        
        </div>
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
        <div className={`${show ? styles.hide : ""}`}>
         {
              isLoading ? <img src={spinner} alt="" className={styles.spinner} /> :
               
        <div className={ ` ${styles.cardContainer}`}>        
        
         {
          newFood?.map((foodNew)=>(
            <Link to="/4"> <div className={styles.Card}>
            <div className={styles.cardHead}>
               <img src={FoodOne} alt="" className="h-60 w-90" />
            </div>
            <div className={styles.cardBody}>
               <h2 className={styles.cardheading}>{foodNew.name}</h2>
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
          ))   
      
}

            

            

        </div>
}
        {/* <div className={styles.btnContainer}>
        <button className={`${styles.more} p-4 bg-lightBlue rounded-lg mt-7 text-white` }>see more</button>
        </div> */}
        </div>
      
        <div className={styles.btnContainer}>
        <Link to="/newfoods"><button className={`${styles.more} sm:mt-4 w-full p-4 bg-deepBlue rounded-lg mt-7 text-white` }>see more</button></Link>
        </div>
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`}></div>
      
      
  </div>
  )
}

export default NewQuickbite