import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; // Import nanoid for unique ID generation

const initialState = {
  watchList: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
        const { name, price, authorName, publishDate,image } = action.payload;
        const newList = {
          id: nanoid(), // Assigning a unique ID to each item
          image,
          name,
          price,
          authorName,
          publishDate,
        };
        
        state.watchList.push(newList)
      
    },
    removeFromWatchList: (state, action) => {
        const id = action.payload;
        const existingItem = state.watchList.find((list) => list.id === id);
        
        if (existingItem) {
         
          state.watchList = state.watchList.filter((list) => list.id !== id);
        }
    },
    clearWatchList: (state) => {
        state.watchList = [];
       
    },
  },
});

export const { addToWatchList, removeFromWatchList, clearWatchList } =
  watchListSlice.actions;

export default watchListSlice.reducer;
