import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: { email:"",name: "", password: "",age:null,gender:"",isLogin:false,profilePic:""},
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    updateCredentials: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.profilePic=action.payload.profilePic;
    },
  },
});

export const { login, logout, updateCredentials } = userSlice.actions;
export default userSlice.reducer;
