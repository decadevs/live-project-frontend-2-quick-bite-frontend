// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "./reducer";
// import { apiPost } from "../utility/axios";

// interface LoginData{
//     email:string;
//     password:string
// }


// export const loginUser = createAsyncThunk(
//   "loginUser",
//   async (formData: LoginData, { dispatch }) => {
//     try {
//       dispatch(fetchDataStart(true));
//       const response = await apiPost("/user/login", formData);
//       localStorage.setItem("userId", response.data.id);
//       localStorage.setItem("signature", response.data.signature);
//       localStorage.setItem("role", response.data.role);
//       toast.success(response.data.message);
//       dispatch(fetchDataSuccess(response.data));
//       setTimeout(() => {
//         window.location.href = "/dashboard";
//       }, 2000);
//     } catch (error: any) {
//       toast.error(error.response.data.message);
//       dispatch(fetchDataFailure(error.response.data.message));
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "registerUser",
//   async (formData: LoginData, { dispatch }) => {
//     try {
//       dispatch(fetchDataStart(true));
//       const response = await apiPost("/user/signup", formData);
//       toast.success(response.data.message);
//       localStorage.setItem("signature", response.data.signature);
//       localStorage.setItem("role", response.data.role);
//       dispatch(fetchDataSuccess(response.data));
//       setTimeout(() => {
//         window.location.href = "/confirm";
//       }, 2000);
//     } catch (error: any) {
//       toast.error(error.response.data.Error);
//       dispatch(fetchDataFailure(error.response.data.error));
//     }
//   }
// );