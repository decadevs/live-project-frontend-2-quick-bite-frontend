import React from 'react'
import Food from '../components/Food'
import FoodImg from '../assets/food1.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "../styles/food.module.css"
const FoodPage = () => {
  return (
    <>
      <Header/>
        <div className={styles.foodContainer} > 
       
       <h1 className='color-deepBlue '>Welcome Back</h1>  
       <img src={FoodImg} alt="" className={`${styles.FoodImage}  md:mx-auto pt-30`}/> 
      
       <Food/>
       <Footer/>
   </div>
    </>

  )
}

export default FoodPage