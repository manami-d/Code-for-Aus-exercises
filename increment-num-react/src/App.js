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
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>{ num }</h1>
      <div style={{display: 'flex'}}>
        <Increment handlePlus={handlePlus}/>
        <Decrement handleMinus={handleMinus} />
      </div>
    </div>
  );
}

export default App;