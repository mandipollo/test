import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import sideBarReducer from "./sideBar";

const store = configureStore({
	reducer: {
		product: productReducer,
		sideBar: sideBarReducer,
	},
});

export default store;
