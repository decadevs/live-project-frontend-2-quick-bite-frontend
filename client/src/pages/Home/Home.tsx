import {Navbar} from "../../components/Navbar"
import styles from '../../styles/homePage.module.css'
import NewQuickbite from "../../components/NewQuickbite"
import PopularFood from "../../components/PopularFood"
import PopularDelivery from "../../components/PopularDelivery"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
     <div className={styles.main} >     
     <div className={styles.overlay}></div>
     <Navbar /> 
   <NewQuickbite/>
   <PopularDelivery/>
   <PopularFood/>
   <Footer/>       
      </div>
    </>
   
  )
}

export default Home
