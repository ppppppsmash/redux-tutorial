import './App.css';

import { useSelector } from 'react-redux';

function App() {
  // counter: ./redux/store.js counter: counterReducer
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>count: {count}</h1>
    </div>
  );
}

export default App;
