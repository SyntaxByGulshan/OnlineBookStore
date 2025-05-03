import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: { email:"",name: "", password: "",age:null,gender:"",isLogin:true,
    profilePic: localStorage.getItem('profilePic') || null,},
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
      
    },
updateProfilePic: (state, action) => {
  state.profilePic = action.payload;
  localStorage.setItem('profilePic', action.payload); // Store in local storage
},
  },
});

export const { login, logout, updateCredentials,updateProfilePic } = userSlice.actions;
export default userSlice.reducer;
