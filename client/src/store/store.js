import { configureStore } from '@reduxjs/toolkit';
import userCreationReducer from '../features/userCreation/userCreationSlice';

const store = configureStore({
  reducer: {
    userCreation: userCreationReducer,
  },
});

export default store;
