import { createSlice, Slice } from "@reduxjs/toolkit";

const inputSlice: Slice = createSlice({
  name: "input",
  initialState: {
    inputValue: "",
    isEditing: false,
    selectedIndex: -1,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});
export const { setInputValue, setIsEditing, setSelectedIndex } =
  inputSlice.actions;
export const inputReducer = inputSlice.reducer;
export const selectInputValue = (state: any) => state.input.inputValue;
export const selectIsEditing = (state: any) => state.input.isEditing;
export const selectSelectedIndex = (state: any) => state.input.selectedIndex;
