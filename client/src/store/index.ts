import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import vendorReducer from "../slices/vendorSlice"
import popularRestaurantReducer from "../slices/popularRestaurantSlice"
import popularFoodReducer from "../slices/popularSlice";
import newFoodReducer from "../slices/newFoodsSlice";
import getAllFoodCountReducer from "../slices/getAllFoodCountSlice";
import getTotalFoodReducer from "../slices/popularFoodCountSlice";
import getOrderCountReducer from "../slices/orderCountSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		vendorAuth: vendorReducer,
		popularFood:popularFoodReducer,
		popularRestaurant : popularRestaurantReducer,
		newFood : newFoodReducer,
		allFoodCount :getAllFoodCountReducer,
		totalFood: getTotalFoodReducer,
		vendorOrder: getOrderCountReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
