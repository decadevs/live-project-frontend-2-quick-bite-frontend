// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import axios from "../api/httpService";


export interface userAllFoodDetails{
	id: string;
    order_count: number;
    name: string;
    date_created: Date;
    date_updated: Date;
    vendorId: string;
    price: number;
    food_image: string;
    ready_time: string;
    isAvailable: boolean;
    rating: number;   
    description: string;
   
}
export interface InitialState {	
      userAllFood: userAllFoodDetails[];	
	isLoading: boolean
	error: string;
  token: string;
  isAuthenticated: boolean;
    message:string
  }
  const initialState:InitialState={
     userAllFood:[],
     isLoading:false,
     token: "",
  isAuthenticated: false,
     error:"",
     message: ""
  } 
 
  
  export const getUserAllFood = createAsyncThunk(
    "userAllFood/getPopularFood",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/user/allfoods");
        localStorage.setItem("token", response.data.token);
        return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
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
  
  export const userGetAllFoodSlice = createSlice({
    name: "userAllFood",
    initialState,
    reducers: {},
    extraReducers: (builder) => {  
     
      builder.addCase(getUserAllFood.pending, (state) => {
        // Add user to the state array
        state.isLoading = true;
        state.isAuthenticated = false;
        state.message = ""
        state.error =""
      });
      builder.addCase(getUserAllFood.fulfilled, (state, action) => {
        // Add user to the state array
         state.userAllFood = action.payload.data
         state.message = action.payload.message
         state.isAuthenticated = true;
         state.token = action.payload.token;
         state.isLoading = false
        state.error = "";
        // toast.success(action.payload.message)

      });
  
      builder.addCase(getUserAllFood.rejected, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.isAuthenticated = false;
        
        state.message = ""
        state.error = action.payload as string;
        // toast.error(action.payload as string) 
      });
    },
  });
  
  // Action creators are generated for each case reducer function
//   export const { logout, loginSuccess } = popularFoodSlice.actions;
  
  export default userGetAllFoodSlice.reducer;
