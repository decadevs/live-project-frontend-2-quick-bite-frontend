import {Navbar} from "../../components/Navbar"

import styles from '../../styles/homePage.module.css'
const Home = () => {
  return (
    <>
     <div className={styles.main} >     
     <div className={styles.overlay}></div>
     <Navbar />    
       
      </div>
    </>
   
  )
}

export default Home
