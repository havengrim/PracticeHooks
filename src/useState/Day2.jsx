import React, { useState, useEffect } from 'react';

const Day2 = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="bg-gray-200 shadow-xl w-[80vw] h-1/3 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex flex-col items-center justify-center p-5">
                <div className="bg-gray-100 w-full h-full rounded-full flex flex-col items-center justify-center">
                    <span className="stopwatch-time text-gray-800">
                        <span className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                            {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                        </span>
                    </span>
                    <div className="stopwatch-buttons flex gap-3 mt-4">
                        <button
                            className={`${
                                isRunning ? 'bg-green-500' : 'bg-blue-500'
                            } text-white py-2 px-4 rounded-md text-base sm:text-lg`}
                            onClick={startAndStop}
                        >
                            {isRunning ? 'Stop' : 'Start'}
                        </button>
                        <button
                            className="stopwatch-button bg-red-500 text-white py-2 px-4 rounded-md text-base sm:text-lg"
                            onClick={reset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day2;
