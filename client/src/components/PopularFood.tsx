import  { MouseEventHandler,  useState, useEffect } from 'react';
import styles from "../styles/popular.module.css"
import Dropdown from "../assets/dropdown.svg"
// import  FoodOne from "../assets/food1.png"
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPopularFood } from '../slices/popularSlice';
import spinner from  "../assets/spinner.gif"

const PopularFood = () => {
   const [show, setShow] = useState(false);
  
   const dispatch = useAppDispatch();
   const { popularFood, isLoading } = useAppSelector((state) => state.popularFood);
   console.log({popularFood, isLoading})


  const handleClick : MouseEventHandler<HTMLImageElement>=()=>{
    setShow(!show)
  }
  //fetch popularFood
  

useEffect(() => {
  
   dispatch(getPopularFood());
}, [dispatch]);



  return (

   <div id="pFood" className={styles.popular}>
     
    <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`}></div>
    <div className={styles.popularFlex}>
        <h2 className={styles.popularText}>Popular Foods</h2>
        <div onClick={handleClick} style={{cursor: "pointer"}}>
         {show ? <i className="fa-solid fa-chevron-up" style={{fontSize:"20px"}}></i> :<img src={Dropdown} alt="" className={styles.dropdown} /> }
         </div >
        </div>
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
        <div className={show ? styles.hide : ""}>
       { 
         isLoading ? <img src={spinner} alt="" className={styles.spinner} />  :
         <>
       <div className={styles.cardContainer}>
         {popularFood?.map((food)=>(
        <Link to="/4" key={food.id}> <div className={styles.Card}>
             <div className={styles.cardHead}>
                <img src={food.food_image} alt="" className="h-60 w-90" />
             </div>
             <div className={styles.cardBody}>            
               <h2 className={styles.cardheading}>{food.name}</h2>
                <p className={styles.cardText}>{food.description}</p> 
               
             </div>
             <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
             <div className={styles.cardFooter}>
                <span className={styles.amount}>
                <Link to="/4"> <button className={`${styles.more} p-4 bg-deepBlue rounded-lg mt-7 text-white` }>Order Now</button></Link>
                </span>
                <span className={styles.totalAmount}>#{food.price}</span>
             </div>
            </div></Link>
            ))}

        </div>

        <div className={styles.btnContainer}>
        <Link to="/popularfoods"><button className={`${styles.more} sm:mt-4 w-full p-4 bg-deepBlue rounded-lg mt-7 text-white` }>see more</button></Link>
        </div>
      
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`}></div>
        </>
         }
        </div>
        
  </div>
  )
}

export default PopularFood