import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserPassword: (state, action) => {
      state.password = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserPassword } = userSlice.actions;

export default userSlice.reducer;
