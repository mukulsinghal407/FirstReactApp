import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <div>
        <button style={{padding:"40px"}} onClick={ () => setCount(count-1) }>-</button>
        <h5>Count is {count}</h5>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;