import React from 'react'
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import Count from './components/Count';
import Input from './components/Input';

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
    <Input />
    </>
  )
}

export default App