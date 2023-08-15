// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../api/httpService";


export interface AllFoodDetails{
    id: string;
    email?: string;
    restaurant_name?: string;
    name_of_owner?: string;
    company_name: string;
    password: string;
    address?: string;
    phone_no?: string;
    isAvailable: boolean;
    earnings: number;
    revenue: number;
    role: string;
    salt: string;
    cover_image?: string;
    rating: number;
    orders: number
   
}
export interface InitialState { 
      allFood: AllFoodDetails[];   
    isLoading: boolean
    token: string;
	isAuthenticated: boolean;
    error: string;
    message:string
  }
  const initialState:InitialState={
     allFood:[],
     isLoading:false,
     token: "",
	isAuthenticated: false,
     error:"",
     message: ""
  } 
 
  
  export const getAllFood = createAsyncThunk(
    "allFood/getAllFood",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/vendor/getallfood");
        console.log("response  ", response)
        //localStorage.setItem("vendor", JSON.stringify(response.data.vendor));
        localStorage.setItem("token", response.data.token);
        return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message);
          }
          if (error.request) {
            return thunkAPI.rejectWithValue("Network Error");
          }
          if (error.message) {
            return thunkAPI.rejectWithValue(error.message);
          }
      }
    }
  );
  
  export const getAllFoodSlice = createSlice({
    name: "allFood",
    initialState,
    reducers: {},
    extraReducers: (builder) => {  
     
      builder.addCase(getAllFood.pending, (state) => {
        // Add user to the state array
        state.isLoading = true;
        state.isAuthenticated = false;
        state.message = ""
        state.error =""
      });
      builder.addCase(getAllFood.fulfilled, (state, action) => {
        // Add user to the state array
         state.allFood = action.payload.data;

         state.message = action.payload.message;
         state.isAuthenticated = true;
        state.error = "";
        toast.success(action.payload.message)

      });
  
      builder.addCase(getAllFood.rejected, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.message = ""
        state.isAuthenticated = false;
        state.error = action.payload as string;
        toast.error(action.payload as string) 
      });
    },
  });
  
  // Action creators are generated for each case reducer function
//   export const { logout, loginSuccess } = popularFoodSlice.actions;
  
  export default getAllFoodSlice.reducer;