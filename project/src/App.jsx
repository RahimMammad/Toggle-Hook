import React, { useState } from 'react'
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';

const App = () => {
    const {value, toggle} = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <div>
        {
            value ? <Navbar /> : ""
        }
      </div>
    </div>
  )
}

export default App