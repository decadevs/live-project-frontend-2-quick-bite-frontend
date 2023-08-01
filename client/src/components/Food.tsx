import React from 'react'
import NewQuickbite from './NewQuickbite'
 import FoodImg from "../assets/mobileFrontpg.jpg"
import PopularFood from './PopularFood'
import styles from "../styles/food.module.css"

const Food = () => {
  return (
    <div className='mt-10' >
  <h1 className='color-deepBlue '>Welcome Back</h1>  
       <img src={FoodImg} alt="" className={`${styles.FoodImage}   `}/>   
       
<NewQuickbite/>
<PopularFood/>

    </div>
  )
}

export default Food