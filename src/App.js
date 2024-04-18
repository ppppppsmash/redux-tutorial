import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';

function App() {
  // counter: ./redux/store.js counter: counterReducer
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>count: {count}</h1>

      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>−</button>
    </div>
  );
}

export default App;
