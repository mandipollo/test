import { createSlice } from "@reduxjs/toolkit";

// dummy data
const initialProductState = {
	data: [],
};

// slice for products
const productSlice = createSlice({
	name: `productList`,
	initialState: initialProductState,
	reducers: {
		getData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
