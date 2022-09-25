import { createStore } from 'redux';

// reducer 생성
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'decrement') {
    return { counter: state.counter - 1 };
  }
  return state;
};

// // store 생성
const store = createStore(counterReducer);
//
// // subscriber 생성
// const subscriber = redux.subscribe();
//
// // action...
// const action = store.dispatch...

export default store;
