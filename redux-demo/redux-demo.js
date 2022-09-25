// import redux
const redux = require('redux');

// reducer 함수는 표준 자바스크립트 함수이며 redux에 의해 호출
// action이 감지될 때마다 새로운 state 객체의 스냅샷을 출력(대체로 state는 객체의 형태이다)
// 항상 2개의 매개변수 - 기존의 상태, dispatch된 action을 받음
// 항상 새로운 state 객체를 반환하는 순수한 함수가 되어야 하며, side effect가 있어서는 안된다
// 최초 실행시의 초기값이 필요하므로 매개변수 기본값을 넣어준다
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// store 생성
// 어떤 reducer가 store를 변경하는지 알려주기 위해 인자로 reducer를 넣는다
const store = redux.createStore(counterReducer);

console.log(store.getState());

// store를 구독하는 함수
// redux가 이 함수를 인식하고 상태가 변경될 때마다 실행하도록 해야 한다 => subscribe() 메서드 호출
const counterSubscriber = () => {
  // getState()는 createStore()로 생성된 store에서 사용할 수 있는 메서드로,
  // 업데이트 된 후의 최신 상태 스탭샷을 제공
  const latestState = store.getState();
  console.log(latestState);
};

// store에 subscribe() 메서드를 호출하고 구독 함수를 인자로 넣어
// redux가 store 변경시마다 실행하도록 한다
store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
