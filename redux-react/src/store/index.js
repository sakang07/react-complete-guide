import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// store 생성
// configureStore는 createStore처럼 store를 만들지만 여러 개의 reducer를 하나로 쉽게 합칠 수 있다
// 인자로 reducer 함수가 아니라 configuration 객체를 받는다
const store = configureStore({
  // redux에는 전역 상태를 담당하는 단 하나의 reducer 함수만 있어야 한다
  // reducer: counterSlice.reducer,

  // 만약 규모가 큰 앱이라 state slice가 여러개 있다면 객체로 받아와 key값을 설정해 주고
  // 그 값들이 또 다른 reducer 함수가 되도록 reducer 맵을 생성한다
  // configureStore는 모든 reducer를 하나의 큰 reducer로 병합해 준다
  reducer: { counter: counterReducer, auth: authReducer },
});

// couterSlice.actions - createSlice 함수의 reducer로 지정되어 있는 메서드 이름을 key값으로 가져오는 객체
// store처럼 export해서 다른 컴포넌트에서 받아 사용한다

// counter.actions.toggleCounter(); // action 객체를 이런 형태로 반환하는 action 생성자 { type: '자동 생성되는 유일한 식별자' }
// 직접 action 객체를 생성하지 않으므로 type 값 식별자와 오타를 신경 쓸 필요가 없다

export default store;
