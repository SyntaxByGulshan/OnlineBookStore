import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import watchListReducer from './watchList';

const store = configureStore({
    reducer: {
        user:userReducer,
        cart:cartReducer,
        watchList:watchListReducer
    },
});

export default store;