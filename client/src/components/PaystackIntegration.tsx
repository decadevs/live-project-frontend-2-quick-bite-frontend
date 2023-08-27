/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { PaystackButton } from "react-paystack"
import styles from "../styles/paystack.module.css"
import { FaTimes } from "react-icons/fa"
import "../styles/index.css"
import { useCart } from "react-use-cart"
// interface Close{
//   closeModal : boolean
// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaystackIntegration:React.FC<any> = ({closeModal}) => {
  const { cartTotal, emptyCart } = useCart();
    const publicKey = "pk_test_7a07c22bac28de6adde6e701da1374a91b14f269"
  const [amount, setAmount] =  useState(cartTotal)
  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lasttname, setLastName] = useState("")
  const componentProps = {
    email,
    amount: amount * 100,   
    firstname,
    lasttname,
        
    publicKey,
    text: "Checkout",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(transaction: any) {
      const message = `Payment Complete
        Reference ${transaction.reference}         
        `
      alert(message);
      setEmail(email);
      setFirstName("");
      setLastName("");
      setAmount(cartTotal);
      emptyCart()
       window.location.href="/order"
       


    },
    onCancel() {
      alert("Wait! You need this oil, don't go!!!!")
    },
 

  }
 

  const storedUserData = localStorage.getItem('user');
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  return (

    <div className={styles.modalBackground}>
      
    <div className={styles.modalContainer}>
    <FaTimes className={styles.cancel} onClick={()=>closeModal(false)}/>
        <div className={styles.title}>
            <h2>kindly confirm your details</h2>
            
        </div>
        <div className={styles.body}>   
           
          <input type="text"          
            value={ parsedUserData.data.firstname}
            required
          className={styles.modalInput}
          onChange={(e)=>setFirstName(e.target.value)}
          readOnly
          /> <br/>
            
          <input type="text"   
          name="lastName"       
          value={ parsedUserData.data.lastname}
          onChange={(e)=>setLastName(e.target.value)}

          className={styles.modalInput}
            required
          readOnly
          /><br/>
         
          <input type="text" 
          
          name ="Email"
          value={ email}
          className={styles.modalInput}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email"
          required
         
          /><br/>
            
          <input type="number"          
            id ="Amount" 
            name ="totalAmount"
                      
            value={cartTotal}
            required
            // onChange={(e)=>setAmount(e.target.value)}
            
         
            className={styles.modalInput}
   
          /><br/>     

        <div className={styles.divider}></div>

        <div className={styles.footer}>

        <PaystackButton className={styles.payBtn} {...componentProps} />
           
          </div>
      
         
        </div>
    </div>
   
     </div>

//     <div class="relative flex w-100 mt-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//   <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-deepBlue to-lightBlue">
//   </div>
//   <div class=" p-10 mx-auto space-y-5 ">
//     <div class="  flex justify-betwwen  ">
//       <h4 class=" block font-sans md: text-xl font-semibold  ml-10">First Name</h4>
//       <h4 class="block font-sans text-lg font-bold leading-relaxed text-inherit antialiased">Olawale</h4>
//     </div>
//     <div  class="flex justify-between">
//       <h4 class=" block font-sans text-xl font-semibold ">Last Name</h4>
//       <h4 class="block font-sans text-lg font-bold leading-relaxed text-inherit antialiased">Ojelude</h4>
//     </div>
//     <div  class="flex justify-between">
//       <h4  class=" block font-sans text-xl font-semibold ">Email</h4>
//       <span class="block font-sans text-lg font-bold leading-relaxed text-inherit antialiased">example@gmail.com</span>
//     </div>
//     <div  class="flex justify-between">
//       <h4  class=" block font-sans text-xl font-semibold ">Phone</h4>
//       <h4 class="block font-sans text-lg font-bold leading-relaxed text-inherit antialiased">08132913298</h4>
//     </div>
//     <div  class="flex justify-between">
//       <h4 class=" block font-sans text-xl font-semibold ">Amount</h4>
//       <h4 class="block font-sans text-lg font-bold leading-relaxed text-inherit antialiased">8000</h4>
//     </div>
  
//     <div class="p-6 pt-0">
//     {/* <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//       Read More
//     </button> */}
//     <PaystackButton class=" select-none rounded-lg bg-deepBlue py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" {...componentProps} />
//   </div>
//   </div>
 
// </div>
//     <div className={styles.App}>
//   <div className="container">
//   <FaTimes className={styles.cancel} onClick={()=>closeModal(false)}/>
//     <div className="item">
//       <div className="overlay-effect"></div>     
//     </div>
//     <div className={styles.checkout_form}>
//   <div className="checkout-field">
//     <label> FirstName</label>
//     <input
//       type="text"
//       id="firstname"

//       onChange={(e) => setFirstName(e.target.value)}
//     />
//   </div>
//   <div className="checkout-field">
//     <label>LastName</label>
//     <input
//       type="text"
//       id="lastname"
      
//       onChange={(e) => setLastName(e.target.value)}
//     />
//   </div>
//   <div className="checkout-field">
//     <label>Email</label>
//     <input
//       type="text"
//       id="email"
//       onChange={(e) => setEmail(e.target.value)}
//     />
//   </div>
//   <div className="checkout-field">
//     <label>Amount</label>
//     <input
//       type="text"
//       id="amount"
//       onChange={(e) => setAmount(Number(e.target.value))}
//     />
//   </div>
//   <PaystackButton className="paystack-button" {...componentProps} />
// </div>
//   </div>
// </div>
  )
}

export default PaystackIntegration