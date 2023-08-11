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
import auth from "./utility/auth";
import { loginSuccess } from "./slices/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./pages/CheckOut";

if (auth.authenticate()) {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const token = localStorage.getItem("token") as string;
  store.dispatch(loginSuccess({ user, token }));
}

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
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
        <Footer />
      </main>
    </Provider>
  );
}
export default App;
