import React from 'react'
import useCount from '../hooks/useCount'

const Count = () => {
    const { count1, count2, increaseCount1, decreaseCount1, increaseCount2, decreaseCount2 } = useCount();

  return (
    <div>
      <div>
        <button onClick={increaseCount1}>Increment Count 1</button>
        <button onClick={decreaseCount1}>Decrement Count 1</button>
        <p>First Count: {count1}</p>
      </div>
      <div>
        <button onClick={increaseCount2}>Increment Count 2</button>
        <button onClick={decreaseCount2}>Decrement Count 2</button>
        <p>SecondCount: {count2}</p>
      </div>
    </div>
  )
}

export default Count