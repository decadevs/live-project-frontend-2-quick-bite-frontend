import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./pages/Auth/signUp"
import SignIn from "./pages/Auth/signIn"
// import OtpVerification from "./components/otpVerification/OtpVerification"
import VendorsPage from "./pages/VendorsPage"

function App() {


  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<SignIn />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          {/* <Route path='/otp' element={<OtpVerification />}></Route> */}
          <Route path='/vendors' element={<VendorsPage/>}></Route>
        </Routes>
      </main>

    </>
  )
}

export default App
