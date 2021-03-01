import React from 'react';

const Increment = ({handlePlus}) => {
  return(
    <div>
      <button onClick={() => handlePlus()}>Add</button>
    </div>
  )
};

export default Increment;