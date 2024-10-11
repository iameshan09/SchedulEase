import { createSelector, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'progress',
  initialState: {
    value: false,
    message: '',
  },
  reducers: {
    startProgress: (state, action) => {
      state.value = true;
      state.message = action.payload || state.message;
    },
    endProgress: (state) => {
      state.value = false;
      state.message = '';
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { startProgress, endProgress, setMessage } = slice.actions;

const selectState = (state) => state.progress;

export const selectProgress = createSelector([selectState], (progress) => ({ open: progress.value, message: progress.message }));

export default slice.reducer;
