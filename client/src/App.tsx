import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./pages/Auth/signUp"
import SignIn from "./pages/Auth/signIn"
<<<<<<< HEAD
import FoodPage from "./pages/FoodPage"
import SingleVendor from "./pages/SingleVendor"
=======
import OtpVerification from "./components/otpVerification/OtpVerification"

>>>>>>> d94354bd2c7720f50894d926b9527a26c21479db
function App() {


  return (
    <>
<<<<<<< HEAD
     <main>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/:id' element = {<SingleVendor/>}></Route>
      <Route path='login' element = {<SignIn/>}></Route>     
      <Route path='/register' element = {<SignUp/>}></Route>
      <Route path='/food' element = {<FoodPage/>}></Route>
           
     </Routes>
     </main>
=======
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<SignIn />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/otp' element={<OtpVerification />}></Route>
        </Routes>
      </main>
>>>>>>> d94354bd2c7720f50894d926b9527a26c21479db

    </>
  )
}

export default App
