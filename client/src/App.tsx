/* eslint-disable @typescript-eslint/no-unused-vars */

import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/signUp";
import SignIn from "./pages/Auth/signIn";
import FoodPage from "./pages/FoodPage";
import SingleVendor from "./pages/SingleVendor";
import VendorSignupForm from "./components/vendorSignUp";
import VendorLoginForm from "./components/vendorLogin";
import VendorRegNO from "./components/vendorVerifyForm";
import VendorPassword from "./components/vendorPassword";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import Footer from "./components/Footer";
import VendorsPage from "./pages/VendorsPage";
import ModalPage from "./pages/ModalPage";
import ButtonPage from "./pages/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AllFoodsPage from "./pages/AllFoodsPage";
import NewFoodsPage from "./pages/NewFoodsPage";
import PopularResPage from "./pages/PopularResPage";
import PopularFoodsPage from "./pages/PopularFoodsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserUpdatesProfile from "./components/userUpdatesProfile";
import VendorHome from "./vendordashboard/Home";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Products from "./pages/Product";
import Orders from "./pages/Orders";
import AllVendorFoods from "./pages/AllVendorFoods";
import VendorCreatesFood from "./components/VendorCreatesFood";
import EditVendor from "./components/EditVendor";
import UserLandingpg from "./pages/userLandingpg";
import {ProtectRoute} from './utility/auth'
<<<<<<< HEAD
import PaystackIntegration from "./components/PaystackIntegration";

function App() {
	
	return (
		<Provider store={store}>
			<ToastContainer />
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="login" element={<SignIn />}></Route>
					<Route path="/register" element={<SignUp />}></Route>
					<Route path="/vendor" element={<VendorSignupForm />}></Route>
					<Route path="/vendorlogin" element={<VendorLoginForm />}></Route>
					<Route path="/verifyVendor" element={<VendorRegNO />}></Route>
					<Route path="/vendorPassword" element={<VendorPassword />}></Route>
					<Route path="/:id" element={<SingleVendor />}></Route>
					<Route path="/food" element={<FoodPage />}></Route>
					<Route path="/otp" element={<OtpVerificationPage />}></Route>
					<Route path="/vendors" element={<VendorsPage />}></Route>
					<Route path="/modal" element={<ModalPage />}></Route>
					<Route path="/button" element={<ButtonPage />}></Route>
					<Route path="/vendorsFood" element={<VendorCreatesFood />}></Route>
					<Route path="/allvendorfoods" element={<AllVendorFoods />}></Route>
					<Route path='/userupdatesprofile' element={<UserUpdatesProfile />}></Route>
					<Route path='/userlanding' element={<UserLandingpg/>}></Route>
                    <Route path="/editVendor" element = {<VendorsEdit/>}></Route>
                    <Route path="/editVendor" element = {<VendorsEdit/>}></Route>
					<Route path="/vendordashboard" element={<VendorHome />}></Route>
					<Route path="/vendordashboard" element={<ProtectRoute><VendorHome /></ProtectRoute>}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/analytics" element={<Analytics />}></Route>
					<Route path="/settings" element={<Settings />}></Route>
					<Route path="/orders" element={<Orders />}></Route>
					<Route path="/allfoods" element={<AllFoodsPage />}></Route>
					<Route path="/newfoods" element={ <NewFoodsPage />}></Route>
					<Route path="/popular" element={ <PopularResPage/>}></Route>
					<Route path="/popularfoods" element={ <PopularFoodsPage/>}></Route>
					<Route path="/checkout" element={ <PaystackIntegration/>}></Route>
				</Routes>
				<Footer />
			</main>
		</Provider>
	);
=======
import VendorsEdit from "./pages/VendorsEdit";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <main>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Home />}></Route>

          {/* User routes */}
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>

          {/* Vendor Routes */}
          <Route path="/vendor" element={<VendorSignupForm />}></Route>
          <Route path="/vendorlogin" element={<VendorLoginForm />}></Route>
          <Route path="/verifyVendor" element={<VendorRegNO />}></Route>
          <Route path="/vendorPassword" element={<VendorPassword />}></Route>
          <Route path="/:id" element={<SingleVendor />}></Route>
          <Route path="/food" element={<FoodPage />}></Route>
          <Route path="/otp" element={<OtpVerificationPage />}></Route>
          <Route path="/vendors" element={<VendorsPage />}></Route>
          <Route path="/modal" element={<ModalPage />}></Route>
          <Route path="/button" element={<ButtonPage />}></Route>
          <Route path="/vendorsFood" element={<VendorCreatesFood />}></Route>
          <Route path="/allvendorfoods" element={<AllVendorFoods />}></Route>
          <Route path="/userupdatesprofile" element={<UserUpdatesProfile />}></Route>
          <Route path="/userlanding" element={<UserLandingpg />}></Route>
          {/* <Route path="/editVendor" element = {<VendorsEdit/>}></Route> */}
          <Route path="/editvendor" element={<EditVendor />}></Route>
          <Route path="/vendordashboard" element={<VendorHome />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/allfoods" element={<AllFoodsPage />}></Route>
          <Route path="/newfoods" element={<NewFoodsPage />}></Route>
          <Route path="/popular" element={<PopularResPage />}></Route>
          <Route path="/popularfoods" element={<PopularFoodsPage />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
        <Footer />
      </main>
    </Provider>
  );
>>>>>>> a42e89685a0021801ed1d1aa4cf0e95e1d75017f
}

export default App;
