// import {createSlice, PayloadAction} from "@reduxjs/toolkit"



// export interface State{
  

// }

//  export const InitalState : State = {
//   data : [], 
//   vendor :[] ,
//   loading : true,
//   error : null

// }

//  const vendorSlice = createSlice({
//   name :"vendor" ,
//   InitialState, 
//   reducers :{
   
//   }
// })
// export default vendorSlice.reducer
import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface vendorState{
    data:[]
    vendor:[]
    loading?: boolean
     error : string | null
    
}

const initialState: vendorState={
    data:[],
    vendor:[],
    loading : true,
    error : null
}
export const VendorSlice = createSlice({
    name : 'Vendor',
    initialState,
    reducers:{
     fetchDataStart:(state , action : PayloadAction<boolean>)=>{
      state.loading = action.payload
     },
     fetchDataSuccess:(state, action:PayloadAction<[]>)=>{
      state.loading = false;
      state.data = action.payload;
     },
     fetchDataVendor: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.vendor = action.payload;
    },

     fetchDataFailure:(state, action:PayloadAction<string>)=>{
      state.loading =  false
      state.error  =  action.payload
      
     }
      
    

    }
})

export const{fetchDataStart, fetchDataSuccess, fetchDataVendor,fetchDataFailure} = VendorSlice.actions
export default VendorSlice.reducer

