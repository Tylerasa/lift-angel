import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: null,
  username: null,
  first_name: null,
  last_name: null,
  date_of_birth: null,
  gender: null,
  email: null,
  national_id: null,
  primary_phone: null,
  secondary_phone: null,
  photo_url: null,
  old_pwd: null,
  created_by: null,
  password: null,
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserGroup: (state, action) => {
      state.name = action.payload;
    },
    setFirstName: (state, action) => {
      state.region = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setLastName: (state, action) => {
      state.access_token = action.payload;
    },
    setDob: (state, action) => {
      state.username = action.payload;
    },
    setUserGender: (state, action) => {
      state.userId = action.payload;
    },
    setNationalId: (state, action) => {
      state.userId = action.payload;
    },
    setUserPrPhone: (state, action) => {
      state.userId = action.payload;
    },
    setUserScPhone: (state, action) => {
      state.userId = action.payload;
    },
    setUserPhoto: (state, action) => {
      state.userId = action.payload;
    },
    setUserOldPassword: (state, action) => {
      state.userId = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userId = action.payload;
    },
    setCreator: (state, action) => {
      state.userId = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setUserGroup,
  setFirstName,
  setUserEmail,
  setLastName,
  setDob,
  setUserPrPhone,
  setNationalId,
  setUserScPhone,
  setUserPhoto,
  setUserOldPassword,
  setUserPassword,
  setCreator
} = userSlice.actions;

export default userSlice.reducer;
