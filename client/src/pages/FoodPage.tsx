import React from 'react'
import Food from '../components/Food'

import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "../styles/food.module.css"
const FoodPage = () => {
  return (
    <>
      <Header/>
        <div className={styles.foodContainer} > 
      
      
      
       <Food/>
       <Footer/>
   </div>
    </>

  )
}

export default FoodPage