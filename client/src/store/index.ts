import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import popularRestaurantReducer from "../slices/popularRestaurantSlice"
import popularFoodReducer from "../slices/popularSlice";
import newFoodReducer from "../slices/newFoodsSlice";
import getAllFoodCountReducer from "../slices/getAllFoodCountSlice";
import getTotalFoodReducer from "../slices/popularFoodCountSlice";
import getOrderCountReducer from "../slices/orderCountSlice";
import userGetAllFoodReducer from "../slices/userGetAllFoodSlice"
import getSingleUserReducer from "../slices/getSingleUserProfileSlice"

export const store = configureStore({
	reducer: {
		auth: authReducer,
		popularFood:popularFoodReducer,
		popularRestaurant : popularRestaurantReducer,
		newFood : newFoodReducer,
		allFoodCount :getAllFoodCountReducer,
		totalFood: getTotalFoodReducer,
		vendorOrder: getOrderCountReducer,		
		userAllFood : userGetAllFoodReducer,
		singleUser :getSingleUserReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
