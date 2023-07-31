import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./pages/Auth/signUp"
import SignIn from "./pages/Auth/signIn"
import VendorSignupForm from "./components/vendorSignUp"
import VendorLoginForm from "./components/vendorLogin"
import VendorRegNO from "./components/vendorVerifyForm"
import VendorPassword from "./components/vendorPassword"
import OtpVerification from "./components/otpVerification/OtpVerification"

function App() {


  return (
    <>
     <main>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='login' element = {<SignIn/>}></Route>     
      <Route path='/register' element = {<SignUp/>}></Route>
      <Route path='/vendor' element = {<VendorSignupForm/>}></Route>
      <Route path='/vendorlogin' element = {<VendorLoginForm/>}></Route> 
      <Route path='/verifyVendor' element = {<VendorRegNO/>}></Route>   
      <Route path='/vendorPassword' element = {<VendorPassword/>}></Route> 

     </Routes>
     </main>
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<SignIn />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/otp' element={<OtpVerification />}></Route>
        </Routes>
      </main>

    </>
  )
}

export default App
