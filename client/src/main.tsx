import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import "./styles/index.css"
import App from './App.tsx'
import thunk from "redux-thunk"
import reducer from "./redux/reducers"
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:reducer,
  middleware:[thunk]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
   <Provider store={store}>
   <App />
   </Provider>
  
    </BrowserRouter>
  
  </React.StrictMode>,
)
