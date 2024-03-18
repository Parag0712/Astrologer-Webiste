import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menuClick: false,
}
const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.menuClick = !state.menuClick
    }
  }
})

export default stateSlice.reducer;
export const {toggleState} = stateSlice.actions;