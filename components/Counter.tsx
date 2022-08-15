import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const value = useSelector((state) => (state as any).counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
export default Counter;
