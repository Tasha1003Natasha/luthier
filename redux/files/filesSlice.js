import { createSlice } from "@reduxjs/toolkit";

const state = {
  headGallery: [],
  currentItemHG: null,
};

export const filesSlice = createSlice({
  name: "files",
  initialState: state,
  reducers: {
    addHeadGallery(state, { payload }) {
      state.headGallery = payload;
    },
    setCurrentItemHG(state, { payload }) {
      state.currentItemHG = payload;
    },
  },
});

export const { addHeadGallery, setCurrentItemHG } = filesSlice.actions;
export const filesReduser = filesSlice.reducer;
