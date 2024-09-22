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
        <div className='flex flex-col gap-2 w-full justify-center items-center h-screen'>
            <div className='rounded-md flex justify-between items-center shadow-md sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/6 w-full h-20'>
                <button onClick={increase} className='h-full bg-blue-800 p-6 text-white flex justify-center items-center rounded-s-md'>+</button>
                <span className='text-3xl font-bold'>{counter}</span>
                <button onClick={decrease} className='h-full bg-blue-800 p-6 text-white flex justify-center items-center rounded-e-md'>-</button>
            </div>
            {/* <button onClick={reset}>reset</button> */}
        </div>
    </div>
  )
}

export default Day3