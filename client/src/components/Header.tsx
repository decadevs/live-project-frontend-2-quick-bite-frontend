import {useState} from 'react'
import styles from "../styles/header.module.css"
import { Link } from 'react-router-dom'
import ProfileImg from "../assets/profile.png"
import Logo from "../assets/LogoBite.svg"
import ShoppingCart, { Product } from "../components/CartModal";
import { GiShoppingBag } from "react-icons/gi"
import  "./cartmodal.css";
import "../pages/cartpage.css";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    count: 2,
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
    count: 1,
    image: "product2.jpg",
  },
];

const Header = () => {
    const[collapse, setCollapse] = useState(true)
    
    const toggleButton = ()=> setCollapse(!collapse)

  const [cartVisibility, setCartVisibility] = useState(false);
  const [products, setProducts] = useState(initialProducts);
   

  const handleProductRemove = (product: Product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, count: newQuantity } : p
    );
    setProducts(updatedProducts);
  };

  const handleCartClose = () => {
    setCartVisibility(false);
  };
    const menus = 
      [{  id : "Id", Updateprofile:"Update profile", Order :  "Order", Changepassword : "Change Password"}]
    const [dropdown, setDropDown] = useState(true)
    const toggle = () =>setDropDown(!dropdown)
   
  return (
    <div>
   <nav className= {`${styles.navbar}  container mx-auto px-10 `} >
        <div className={`flex sm:items-center space-x-20 md:flex items-center justify-between mx-20 ${"animate__animated animate__backInDown"}`}>
        
         <Link to='/'><div className={`${styles.logoContainer}`}>
        
            <img src={Logo} alt="" className= {`${styles.logo} pr-3 `} />
            
         </div>
     
        
         </Link>
   
         <div className="hidden md:flex space-x-6 justify-between">         
           
         </div>
         <div className={styles.flexProfile}>
         
         <img src={ProfileImg} alt="" className={styles.profileImg}/>
            
         <img src={ProfileImg} alt="" className={styles.profileImg} onClick={toggle}/>
        
         <ul className={`${dropdown ?styles.dropdown : ""} 
         absolute  top-20 w-60 h-15 p-5  bg-brown-300 rounded`  }>
          {menus.map((menu)=>(<li className={styles.menu} key={menu.id}>{menu.Order}<br/> <Link to ="/userupdatesprofile" >{menu.Updateprofile} </Link><br/>
          {menu.Changepassword}
          </li>
          ))
          
          
          }
          
         </ul >
         
       
            <p>Adeyemo.O</p>
            <Link to="/"><button className={`${styles.SignUp} bg-deepBlue `}>Logout</button></Link> 
            <GiShoppingBag size={35} className="shop" onClick={()=>setCartVisibility(!cartVisibility)}/>
         </div>
 

         <button id="menu-btn" onClick={toggleButton} className={ `${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden`}>
         {collapse ?<i className= 'fas fa-bars'></i> :<i className='fas fa-times'></i> }
          </button>
        </div>
      
        <div className={`${collapse ?styles.mobileView : ""} mt-20 md:hidden bg-deepBlue`} >
        <div  className=" sm:hidden w-auto sm:self-center left-6 right-6 drop-shadow-md ">
        {/* <a href="#" className="mx-auto">Vendors</a> */}
          
            <Link to="/"><button className={`${styles.SignUp} bg-deepBlue  hover:bg-lightBlue min-w-full`}>Logout</button> </Link>      
        
    </div>
    </div>

     </nav>
    { cartVisibility && <ShoppingCart 
          products={products} // Pass the products data to the cart
          onProductRemove={handleProductRemove}
          onQuantityChange={handleQuantityChange}
           onClose={handleCartClose}
    
    />}
    </div>
  )
}

export default Header