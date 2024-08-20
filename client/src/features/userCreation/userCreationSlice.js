import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user creation data
export const fetchUserCreationData = createAsyncThunk(
  'userCreation/fetchUserCreationData',
  async () => {
    const response = await axios.get('api/UserCreation');
    return response.data.reverse(); // Ensure the API returns an array
  }
);

export const createUserData = createAsyncThunk(
  'userCreation/createUserData',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/UserCreation', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }

)

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
      })

      .addCase(createUserData.pending, (state)=> {
        state.status = "loading"
      })

      .addCase(createUserData.fulfilled, (state, action)=>{
        state.status = "succeeded";
        state.data.push(action.payload);
      })

      .addCase(createUserData.rejected, (state, action)=>{
        state.status = "pending"
        state.error = action.payload
      });
  },
});

export default userCreationSlice.reducer;
