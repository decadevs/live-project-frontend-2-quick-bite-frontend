import React from 'react'
import styles from "../styles/footer.module.css"
const Footer = () => {
  return (
     <div className={styles.footerContainer}>
        <div>
        <p className={styles.footerLogo}>QUICK <br/> BITE</p>
        </div>
   
    <div className={styles.footerLeft}>
    <div className={styles.footerFeatures}>
        <h5 className={styles.socialText}>Social</h5>
       <a className={styles.link} href="http://"> <p>Facebook</p></a>
       <a className={styles.link}href="http://"><p>Instagram</p></a> 
       <a className={styles.link} href="http://"><p>LinkedIn</p></a>
        
    </div>
    <div className={styles.footerFeatures}>
        <h5 className={styles.help}>Get help</h5>
        <p className={styles.help}>Partner with us</p>
        <p className={styles.help}>Add your resturant</p>
        <p className={styles.help}> Sign up to deliver</p>
    </div>
    <div>
        <h5 className={styles.footerbenefit}>Read our Blog</h5>
        <p className={styles.footerbenefit}>Buy gift card</p>
        <p className={styles.footerbenefit}>Restuarants nearby</p>
        <p className={styles.footerbenefit}>save on first order</p>
    </div> 
    </div>
 
     </div>
  )
}

export default Footer