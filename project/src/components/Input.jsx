import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const Input = () => {
    const [name, setName] = useLocalStorage('username');

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
    </div>
  )
}

export default Input