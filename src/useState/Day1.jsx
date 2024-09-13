import React, {useState} from 'react'

const Day1 = () => {
    
    const [show, setShow ] = useState(false)

    const functionClick = () => {
        setShow(!show);
    }
  return (
    <div>
        <button className='p-2 bg-gray-800 text-white rounded-md' onClick={functionClick}>Show/Hide</button>
        {show &&(
        <div className='bg-gray-900 text-white p-4 mt-5 rounded-lg'>
            Hello, Philippines!
        </div>
        )}
    </div>
  )
}

export default Day1