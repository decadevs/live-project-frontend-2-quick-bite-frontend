import  { MouseEventHandler,  useState ,useEffect} from 'react';
import styles from '../styles/freeDelivery.module.css'
import Dropdown from "../assets/dropdown.svg"
import  FoodOne from "../assets/food1.png"
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPopularRestaurant} from '../slices/popularRestaurantSlice';
import spinner from  "../assets/spinner.gif"


const PopularDelivery = () => {
    const[show, setShow] = useState(false)
    
    // const [show, setShow] = useState(true)
   const handleClick : MouseEventHandler<HTMLImageElement>=()=>{
     setShow(!show)
   }
   const dispatch = useAppDispatch();
   const { popularRestaurant, isLoading } = useAppSelector((state) => state.popularRestaurant);
   console.log({popularRestaurant, isLoading})
      
   useEffect(()=>{
      dispatch(getPopularRestaurant()) 
    
   },[dispatch])
  return (

    <div id="pVendor" className={styles.delivery}>
    <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`} ></div>
    <div className={styles.deliveryFlex}>
        <h2 className={styles.deliveryText}>Popular Restaurants</h2>
        <div onClick={handleClick} style={{cursor: "pointer"}}>
         {show ? <i className="fa-solid fa-chevron-up" style={{fontSize:"20px"}}></i> :<img src={Dropdown} alt="" className={styles.dropdown} /> }
         </div >
        </div>
        <div className={`${styles.divider}  w-70% md: h-0.5 bg-deepBlue`}></div>
        <div className={ show ? styles.hide : ""}>
        {
          isLoading ? <img src={spinner} alt="" className={styles.spinner} />: 
          <>
         <div className={styles.cardContainer}>
         {
            isLoading ? <img src={spinner} alt="" /> :
         
          popularRestaurant?.map((restaurant)=>(
            <Link to="/4"> <div className={styles.Card} key={restaurant.id}>
            <div className={styles.cardHead}>
               <img src={FoodOne} alt="" className="h-60 w-90" />
            </div >
            <div className={styles.cardBody}>
               <h2 className={styles.cardheading}>{restaurant.name_of_owner}</h2>
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
            {/* <Link to="/4"> <div className={styles.Card}>
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
            </div></Link> */}

        </div>

        <div className={styles.btnContainer}>
       <Link to="/popular"> <button className={`${styles.more} p-4 bg-deepBlue rounded-lg mt-7 text-white` }>see more</button></Link>
        </div>
        </>
        }
        </div>
      
  </div>
  
  )
}

export default PopularDelivery