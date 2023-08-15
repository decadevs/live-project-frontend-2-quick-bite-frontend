import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import popularRestaurantReducer from "../slices/popularRestaurantSlice"
import popularFoodReducer from "../slices/popularSlice";
import newFoodReducer from "../slices/newFoodsSlice";
import getAllFoodReducer from "../slices/getAllFoodSlice";


export const store = configureStore({
	reducer: {
		auth: authReducer,
		popularFood:popularFoodReducer,
		popularRestaurant : popularRestaurantReducer,
		newFood : newFoodReducer,
		allFood :getAllFoodReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
