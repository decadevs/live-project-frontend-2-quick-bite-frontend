import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import popularRestaurantReducer from "../slices/popularRestaurantSlice"
import popularFoodReducer from "../slices/popularSlice";
import newFoodReducer from "../slices/newFoodsSlice"
import totalRevenueReducer from '../slices/totalRevenueSlice'
import totalOrdersReducer from "../slices/totalOrdersSlice";
import totalEarningReducer from "../slices/totalEarningSlice";
import vendorPopularFoodsReducer from "../slices/vendorPopularFoodsSlice";
import vendorGetProfileReducer from "../slices/vendorGetProfileSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		popularFood:popularFoodReducer,
		popularRestaurant : popularRestaurantReducer,
		newFood : newFoodReducer,
		vendorRevenue: totalRevenueReducer,
		vendorOrder: totalOrdersReducer,
		vendorEarning: totalEarningReducer,
		vendorPopularFood: vendorPopularFoodsReducer,
		vendorProfile: vendorGetProfileReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
