import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "sidebar",
  initialState: { isMenuOpen: true },
  reducers: {
    toggleMenu(state, payload) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
