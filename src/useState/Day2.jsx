//Timer with start, stop, and reset.
import React from 'react'
import { useState, useEffect } from 'react'

const Day2 = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning ] = useState(false);

    useEffect(() => {
        let intervalId;

        if(isRunning){
            intervalId = setInterval(() => setTime(time + 1), 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    const hours = Math.floor(time / 360000) ;

    const minutes = Math.floor((time % 360000 ) / 6000);

    const seconds = Math.floor((time % 6000) / 100);

    const milliseconds = time % 100;

    const startAndStop = () => {
        setIsRunning(!isRunning);
    }

    const reset = () => {
        setTime(0);
    }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='bg-gray-200 shadow-xl w-1/3 h-1/2 rounded-full flex flex-col items-center justify-center p-10'>
        <div className='bg-gray-100 w-full h-full rounded-full flex flex-col items-center justify-center'>
            <span className='stopwatch-time'>
            {/* {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")} */}
            <span className='font-semibold text-[5rem]'>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
            </span>
            </span>

            <div className='stopwatch-buttons flex gap-3'>
                <button className= {` ${isRunning ? "bg-green-500 text-white py-2 px-4 rounded-md" : "bg-blue-500 text-white py-2 px-4  rounded-md"} `} onClick={startAndStop}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className='stopwatch-button bg-red-500 text-white py-2 px-4 rounded-md' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>

        </div>
    </div>
  )
}


export default Day2