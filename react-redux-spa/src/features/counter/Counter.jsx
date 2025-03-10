import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
