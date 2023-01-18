import { createSlice } from "@reduxjs/toolkit";

const initialStateRoll = {
	isVisible: false,
};

const rollProductsSlice = createSlice({
	name: `rollProducts`,
	initialState: initialStateRoll,
	reducers: {
		showRoll: state => {
			state.isVisible = true;
		},
	},
});

export const rollProductsAction = rollProductsSlice.actions;

export default rollProductsSlice.reducer;
