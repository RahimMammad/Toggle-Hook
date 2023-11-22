import { useState } from 'react'

const useCount = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increaseCount1 = () => {
        setCount1(p => p + 1)
    }
    const decreaseCount1 = () => {
        setCount1(p => p - 1)
    }
    const increaseCount2 = () => {
        setCount2(p => p + 1)
    }
    const decreaseCount2 = () => {
        setCount2(p => p - 1)
    }
  return {count1, count2, increaseCount1, increaseCount2, decreaseCount1, decreaseCount2}
}

export default useCount