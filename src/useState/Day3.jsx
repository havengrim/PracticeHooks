//Put a counter +1 or -1
import React, {useState} from 'react'

const Day3 = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count +1 );
    };

    const decrease = () => {
        setCounter(count => count > 0 ? count -1 : 0 );
    };

    const reset = () => {
        setCounter(0)
    }

  return (
    <div>
        <div className='flex flex-col gap-2'>
            <h1>This is a sample of react counter</h1>
            <span>{counter}</span>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Day3