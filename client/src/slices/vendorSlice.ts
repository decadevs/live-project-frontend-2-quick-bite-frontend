// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import type { PayloadAction } from "@reduxjs/toolkit";
// // import { toast } from "react-toastify";
// import axios from "../api/httpService";

// export interface VendorDetails {
//     id: string;
//     email?: string;
//     restaurant_name?: string;
//     name_of_owner?: string;
//     company_name: string;
//     password: string;
//     address?: string;
//     phone_no?: string;
//     isAvailable: boolean;
//     earnings: number;
//     revenue: number;
//     role: string;
//     salt: string;
//     cover_image?: string;
//     rating: number;
//     orders: number
// }
// export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
//     const response = await axios.get('https://swapi.dev/api/people/');
//     return response.data.results;
//   });

// export interface InitialState {
// 	vendors: VendorDetails[];
// 	// token: string;
// 	// isAuthenticated: boolean;
//     loading : boolean
// 	error: string;
// }

// const initialState: InitialState = {
// 	vendors: [],
// 	// token: "",
// 	// isAuthenticated: false,
//     loading:false,
// 	error: "",
// };



// const characterSlice = createSlice({
//     name: 'getAllfood',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchCharacters.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(fetchCharacters.fulfilled, (state, action) => {
//           state.loading = false;
//           state.vendors = action.payload;
//         });
//     },
//   });
  
//   export  fetchCharacters ;
//   export default characterSlice.reducer;