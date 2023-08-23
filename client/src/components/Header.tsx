import { useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/profile.png";
import Logo from "../assets/LogoBite.svg";
import ShoppingCart, { Product } from "../components/CartModal";
import { GiShoppingBag } from "react-icons/gi";
// import "./cartmodal.css";
//import { GiShoppingBag } from "react-icons/gi"
import { useAppDispatch } from "../store/hooks";
import { logout } from "../slices/authSlice";
import "./cartmodal.css";
import { useCart } from "react-use-cart";

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
  const dispatch = useAppDispatch();

  const { isEmpty, totalItems } = useCart();

  // const {logout} = useAppSelector((state)=>state.auth.logout)
  const [collapse, setCollapse] = useState(true);

  const toggleButton = () => setCollapse(!collapse);

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
  const menus = [
    {
      id: "Id",
      Updateprofile: "Update profile",
      Order: "Order",
      Changepassword: "Change Password",
      Dashboard: "Dashboard",
    },
  ];
  const handleLogout = () => {
    dispatch(logout());
  };
  const [dropdown, setDropDown] = useState(true);
  const toggle = () => setDropDown(!dropdown);

  return (
    <div>
      <nav className={`${styles.navbar}  container mx-auto px-10 `}>
        <div
          className={`flex sm:items-center space-x-20 md:flex items-center justify-between mx-20 ${"animate__animated animate__backInDown"}`}
        >
          <Link to="/">
            <div className={`${styles.logoContainer}`}>
              <img src={Logo} alt="" className={`${styles.logo} pr-3 `} />
            </div>
          </Link>

          <div className="hidden md:flex space-x-6 justify-between"></div>
          <div className={styles.flexProfile}>
            <div className="flex-icon">
              <img src={ProfileImg} alt="" className={styles.profileImg} />
              <p>Adeyemo.O</p>
            </div>
            <button>
              <i className="fa fa-angle-down" onClick={toggle}></i>
            </button>
            <ul
              className={`${dropdown ? styles.dropdown : ""} 
         absolute  top-20 w-60 h-15 p-5  bg-brown-300 rounded`}
            >
              {menus.map((menu) => (
                <li className={styles.menu} key={menu.id}>
                  {menu.Order}
                  <br />{" "}
                  <Link to="/userupdatesprofile">{menu.Updateprofile} </Link>
                  <br />
                  {menu.Changepassword} <br />
                  <Link to="/userlanding">{menu.Dashboard} </Link>
                </li>
              ))}
            </ul>

            <Link to="/">
              <button className={`${styles.SignUp} bg-deepBlue `}>
                Logout
              </button>
            </Link>
            <div className="cartf">
              {!isEmpty && (
                <div className="item-count">
                  <span>{totalItems}</span>
                </div>
              )}
              <GiShoppingBag
                size={35}
                className="the-shop"
                onClick={() => setCartVisibility(!cartVisibility)}
              />
            </div>
          </div>

          <button
            id="menu-btn"
            onClick={toggleButton}
            className={`${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden`}
          >
            {collapse ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </button>
        </div>
        <div
          className={`${
            collapse ? styles.mobileView : ""
          } mt-20 md:hidden bg-deepBlue`}
        >
          <div className=" sm:hidden w-auto sm:self-center left-6 right-6 drop-shadow-md ">
            {/* <a href="#" className="mx-auto">Vendors</a> */}

            <Link to="/">
              <button
                onClick={handleLogout}
                className={`${styles.Logout} bg-deepBlue  hover:bg-lightBlue min-w-full`}
              >
                Logout
              </button>{" "}
            </Link>
          </div>
        </div>
        //
        <div
          className={`${
            collapse ? styles.mobileView : ""
          } mt-20 md:hidden bg-deepBlue`}
        >
          <div className=" sm:hidden w-auto sm:self-center left-6 right-6 drop-shadow-md ">
            {/* <a href="#" className="mx-auto">Vendors</a> */}

            <Link to="/">
              <button
                className={`${styles.Logout} bg-deepBlue  hover:bg-lightBlue min-w-full`}
              >
                Logout
              </button>{" "}
            </Link>
          </div>
        </div>
      </nav>
      {cartVisibility && <ShoppingCart onClose={handleCartClose} />}
    </div>
  );
};

export default Header;
