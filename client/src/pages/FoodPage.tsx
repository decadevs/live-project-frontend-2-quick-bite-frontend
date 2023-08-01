import React from 'react'
import Food from '../components/Food'


import Header from '../components/Header'
import styles from "../styles/food.module.css"
const FoodPage = () => {
  return (
    <>
      <Header/>
        <div className={styles.foodContainer} > 
      
      
      
       <Food/>
      
   </div>
    </>

  )
}

export default FoodPage