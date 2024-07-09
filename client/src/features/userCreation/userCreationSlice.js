import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user creation data
export const fetchUserCreationData = createAsyncThunk(
  'userCreation/fetchUserCreationData',
  async () => {
    const response = await axios.get('api/UserCreation');
    return response.data; // Ensure the API returns an array
  }
);

const userCreationSlice = createSlice({
  name: 'userCreation',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCreationData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserCreationData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserCreationData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userCreationSlice.reducer;
