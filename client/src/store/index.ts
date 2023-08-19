import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import vendorReducer from "../slices/vendorSlice"
import popularRestaurantReducer from "../slices/popularRestaurantSlice"
import popularFoodReducer from "../slices/popularSlice";
import newFoodReducer from "../slices/newFoodsSlice";
import getAllFoodCountReducer from "../slices/getAllFoodCountSlice";
import getTotalFoodReducer from "../slices/popularFoodCountSlice";
import getOrderCountReducer from "../slices/orderCountSlice";
<<<<<<< HEAD
import userGetAllFoodReducer from "../slices/userGetAllFoodSlice"
import getSingleUserReducer from "../slices/getSingleUserProfileSlice"
=======
import vendorGetProfileReducer from "../slices/vendorGetProfileSlice";
import totalRevenueReducer from "../slices/totalRevenueSlice";
import totalEarningReducer from "../slices/totalEarningSlice";
import totalOrderReducer from "../slices/totalOrdersSlice";
import vendorPopularFoodsReducer from '../slices/vendorPopularFoodsSlice';
>>>>>>> a42e89685a0021801ed1d1aa4cf0e95e1d75017f

export const store = configureStore({
	reducer: {
		auth: authReducer,
		vendorAuth: vendorReducer,
		popularFood:popularFoodReducer,
		popularRestaurant : popularRestaurantReducer,
		newFood : newFoodReducer,
		allFoodCount :getAllFoodCountReducer,
		totalFood: getTotalFoodReducer,
<<<<<<< HEAD
		vendorOrder: getOrderCountReducer,		
		userAllFood : userGetAllFoodReducer,
		singleUser :getSingleUserReducer
=======
		vendorOrder: getOrderCountReducer,
		vendorProfile: vendorGetProfileReducer,
		vendorRevenue: totalRevenueReducer,
		vendorEarning: totalEarningReducer,
		vendorOrders: totalOrderReducer,
		vendorPopularFood: vendorPopularFoodsReducer
>>>>>>> a42e89685a0021801ed1d1aa4cf0e95e1d75017f
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
