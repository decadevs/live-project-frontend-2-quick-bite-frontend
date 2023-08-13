// import {  apiPut } from "../utility/axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchDataSuccess, fetchDataFailure, fetchDataStart } from "./reducers";

// export interface PassChange{
//   old_password: string;
//   new_password : string
//   confirm_password : string
// }
// export const ChangePassword = createAsyncThunk(
//    "register/changePassword", async(formData:PassChange, {dispatch})=>{
//       try {
//         dispatch(fetchDataStart(false))
//          const response = await apiPut("/vendor/passwordchange",{} )
//           return response
//       } catch (error) {
//         console.log(error)
//       }
//    }
// )


