import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { 
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from './redux/actions/index_actions';

function App() {

  // Allows us to access props of STATE
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);

  // Allows us to DISPATCH an ACTION to STORE (STATE)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>

      <hr />
      <h4>Log In</h4>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? <div> You are now signed in </div> : ("")}
    </div>
  );
}

export default App;
