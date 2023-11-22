import React from 'react'
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import Count from './components/Count';

const App = () => {
    const {value, toggle} = useToggle(false);
  return (
    <>
    <div>
      <button onClick={toggle}>Toggle</button>
      <div>
        {
            value ? <Navbar /> : ""
        }
      </div>
    </div><br /><br />
    <Count />
    </>
  )
}

export default App