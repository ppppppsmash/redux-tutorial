import './App.css';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';

function App() {
  // counter: ./redux/store.js counter: counterReducer
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>

      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />

      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>−</button>

      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add</button>
    </div>
  );
}

export default App;
