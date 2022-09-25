import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// createSlice - createReducer보다 강력하며 한 번에 여러가지를 단순화한다
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // 자동으로 action을 식별하므로 action을 매개변수로 넣어줄 필요가 없다
    // createSlice는 서로 다른 reducer의 action 식별자를 자동으로 생성한다
    increment(state) {
      // toolkit과 createSlice는 내부적으로 포함하고 있는 immer 패키지를 통해
      // 이와 같이 직접 기존 상태를 변경하는 것처럼 적어도 기존 상태를 변경하지 않고 새로운 상태 객체를 생성해 사용한다
      // 불변성을 신경쓸 필요 없이 작업할 수 있다
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
