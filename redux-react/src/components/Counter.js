import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useDispatch - store에 action을 보낸다
  const dispatch = useDispatch();
  // useSelector - 자동으로 구독을 설정해서 데이터가 바뀔 때마다 받아온다
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
