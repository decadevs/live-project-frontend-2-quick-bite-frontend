import { useEffect, useRef, useState } from "react";
import "./OtpVerification.css";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const codeInputsRef = useRef<HTMLInputElement[]>([]);
  const [resendTimer, setResendTimer] = useState(30); // Countdown timer for RESEND link
  const [otpVerified, setOtpVerified] = useState(false); // Flag to track OTP verification status
 const navigate = useNavigate()
  useEffect(() => {
    const codes: NodeListOf<Element> = document.querySelectorAll(
      ".code"
    ) as NodeListOf<Element>;
    codeInputsRef.current = Array.from(codes) as HTMLInputElement[];

    codeInputsRef.current[0].focus();

    const handleKeyDown = (e: KeyboardEvent, idx: number) => {
      if (e.key >= "0" && e.key <= "9") {
        codeInputsRef.current[idx].value = "";
        setTimeout(() => codeInputsRef.current[idx + 1]?.focus(), 10);
      } else if (e.key === "Backspace") {
        setTimeout(() => codeInputsRef.current[idx - 1]?.focus(), 10);
      }
    };

    const addEventListenerToCodeInput = (
      codeInput: HTMLInputElement,
      idx: number
    ) => {
      codeInput.addEventListener("keydown", (e) => handleKeyDown(e, idx));
    };

    codeInputsRef.current.forEach(addEventListenerToCodeInput);

    // Start the countdown timer for the RESEND link
    const timerInterval = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    // Clean up event listeners and the countdown timer when the component is unmounted
    return () => {
      codeInputsRef.current.forEach((codeInput, idx) => {
        codeInput.removeEventListener("keydown", (e) => handleKeyDown(e, idx));
      });
      clearInterval(timerInterval);
    };
  }, []);

  const handleResendClick = () => {
    // Reset the countdown timer to 30 seconds when the RESEND link is clicked
    setResendTimer(30);
  };

  const handleVerifyClick = () => {
    // Perform the OTP verification here (you should replace this with your actual verification logic)
    const enteredOTP = codeInputsRef.current
      .map((input) => input.value)
      .join("");

    const sentOTP = "123456"; // Replace this with the code sent to the user

    if (enteredOTP === sentOTP) {
      // OTP verification successful, proceed to the next page
      setOtpVerified(true);
      navigate("/login")
      // You can redirect the user to the next page or show a success message
    } else {
      // OTP verification failed, you can show an error message to the user
      // alert("Invalid OTP, please try again.");
      toast.error("please enter valid OTP", {position: toast.POSITION.TOP_CENTER})
    }
  };

  return (
    <div className="wrapper">
      <div className="containerApp">
        <h2><strong>Verify Your Account</strong></h2>
        <p>
          Six digit code was sent to personal@gmail.com <br />
          Enter the code below to verify your email address
        </p>
        <div className="code-container">
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
          <input
            className="code"
            type="number"
            placeholder="0"
            min={0}
            max={9}
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleVerifyClick}
            disabled={otpVerified} // Disable the button after successful OTP verification
          >
            Verify
          </button>
        </div>

        {/* Display the countdown timer and the RESEND link */}
        <small>
          You didn't receive any code?{" "}
          {resendTimer === 0 ? (
            <a href="" onClick={handleResendClick}>
              <strong className="resend">RESEND</strong>
            </a>
          ) : (
            `Resend in ${resendTimer}s`
          )}
        </small>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OtpVerification;
