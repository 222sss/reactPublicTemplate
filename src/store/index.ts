import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './module/counterSlice';

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice
  }
});

export default store;
