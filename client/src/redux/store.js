import { configureStore } from '@reduxjs/toolkit';
import progress from './slices/progress.reducer';


const store = configureStore({
  reducer: {
    progress,
  },
});

export default store;
