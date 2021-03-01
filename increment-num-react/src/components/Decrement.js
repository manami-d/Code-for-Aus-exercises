import React from 'react';

const Decrement = ({handleMinus}) => {
  return(
    <div>
      <button onClick={() => handleMinus()}>Minus</button>
    </div>
  )
};

export default Decrement;