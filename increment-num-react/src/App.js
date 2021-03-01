import React, { useState } from 'react';
import Decrement from './components/Decrement';
import Increment from './components/Increment';

function App() {
  const [num, setNum] = useState(0);
  const handlePlus = () => {
    setNum(num+1)
  };
  const handleMinus = () => {
    setNum(num-1)
  };
  
  return (
    <div>
      <h1>{ num }</h1>
      <Increment handlePlus={handlePlus}/>
      <Decrement handleMinus={handleMinus} />
    </div>
  );
}

export default App;