import React from 'react'
import './OtpVerification.css'

export default function OtpVerifcation() {
  return (
    <div>
        <div className="container">
            <h2>Verify Your Account</h2>
            <p>
                We emailed you the six digit code to personal@gmail.com <br />
                Enter the code below to verify your email address
            </p>
        
            <div className="code-container">
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
                <input className='code' type="number" placeholder='0' min={0} max={9} required />
            </div>

            <div>
                <button type='button' className='btn btn-primary'>Verify</button>
            </div>

            <small>
                If you didn't receive a code!! <strong>RESEND</strong>
            </small>

        </div>


    </div>
  )
}
