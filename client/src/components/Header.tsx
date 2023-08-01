import {useState} from 'react'
import styles from "../styles/header.module.css"
import { Link } from 'react-router-dom'
import ProfileImg from "../assets/profile.png"
const Header = () => {
    const[collapse, setCollapse] = useState(true)
    
    const toggleButton = ()=> setCollapse(!collapse)
  return (
    <div>
   <nav className= {`${styles.navbar}  container mx-auto px-10 `} >
        <div className={`flex sm:items-center space-x-20 md:flex items-center justify-between mx-20 ${"animate__animated animate__backInDown"}`}>
         <Link to='/'><div className={`${styles.logoContainer}`}>
            <h1 className= {`${styles.logo} pr-3 `}>QUICK <br/> BITE</h1>
         </div>
         </Link>
         <div className="hidden md:flex space-x-6 justify-between">         
           
         </div>
         <div className={styles.flexProfile}>
         <img src={ProfileImg} alt="" className={styles.profileImg}/>
            <p>Adeyemo.O</p>
            <Link to="/"><button className={`${styles.SignUp} bg-deepBlue  hover:bg-lightBlue`}>Logout</button></Link> 
         </div>

         <button id="menu-btn" onClick={toggleButton} className={ `${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden`}>
         {collapse ?<i className= 'fas fa-bars'></i> :<i className='fas fa-times'></i> }
          </button>
        </div>
      
        <div className={`${collapse ?styles.mobileView : ""} mt-20 md:hidden bg-white`} >
        <div  className=" sm:hidden w-auto sm:self-center left-6 right-6 drop-shadow-md ">
        {/* <a href="#" className="mx-auto">Vendors</a> */}
          
            <Link to="/"><button className={`${styles.SignUp} bg-deepBlue  hover:bg-lightBlue min-w-full`}>Logout</button> </Link>      
        
    </div>
    </div>

     </nav>

    </div>
  )
}

export default Header