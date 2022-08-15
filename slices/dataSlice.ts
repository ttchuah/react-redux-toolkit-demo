import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'data',

  initialState: {
    data: [],
    error: null,
    pending: false,
  },

  reducers: {
    PENDING: (state) => {
      state.pending = true;
      state.error = null;
    },
    FULFILLED: (state, action) => {
      state.pending = false;
      state.data = action.payload;
      state.error = null;
    },
    REJECTED: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});
export default counterSlice.reducer;
