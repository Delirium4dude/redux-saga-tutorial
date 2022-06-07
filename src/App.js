import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from './redux/actions/actionCreators';

const App = () => {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();

  return (
  <div>
    <button onClick={() => dispatch(increaseCount())}>+1</button>
    <button onClick={() => dispatch(decreaseCount())}>-1</button>
    <h1>{ count }</h1>
  </div>
  )
}

export default App;
