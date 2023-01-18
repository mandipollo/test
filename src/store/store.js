import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import sideBarReducer from "./sideBar";
import rollProducts from "./rollSlice";
const store = configureStore({
	reducer: {
		product: productReducer,
		sideBar: sideBarReducer,
		roll: rollProducts,
	},
});

export default store;
