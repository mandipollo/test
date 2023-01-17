import { createSlice } from "@reduxjs/toolkit";

const initialSideBarState = {
	isVisible: false,
};

const sideBarSlice = createSlice({
	name: `sideBar`,
	initialState: initialSideBarState,
	reducers: {
		showSideBar: state => {
			state.isVisible = true;
		},

		hideSideBar: state => {
			state.isVisible = false;
		},
	},
});

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;
