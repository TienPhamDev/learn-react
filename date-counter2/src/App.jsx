import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(0);
  
  function handleReset() {
    setCount(0)
    setValue(1)
  }
  function handleInputRange(e) {
    setValue(Number(e.target.value))
  }
  function handlePlusCount() {
    
    setCount(s => s + value)
  }
  function handleMinusCount() {
    setCount(s => s - value)
  }
  function handleInputCount(e) {
    setCount(Number(e.target.value))
  }
  const date = new Date();
  date.setDate(date.getDate() + count)
  return <div style={{ textAlign: "center" }}>
    <div>
      <input type="range" min="0" max="10" value={value}
              onChange={handleInputRange} />
      <span>{value }</span>
    </div>
    <div>
      <button onClick={handleMinusCount}>-</button>
      <input type="text" value={count} onChange={handleInputCount} />
      <button onClick={handlePlusCount}>+</button>
    </div>
    <p>
      <span>
        {count === 0 
        ? `Today is ` 
        : count > 0 
        ? `${count} days from today is `
        : `${Math.abs(count)} days ago was ` 
      }
      </span>
      <span>{date.toLocaleString()}</span>
    </p>
    { value !== 1 || count !== 0
      ? 
      <button onClick={handleReset}>Reset</button>
      :
      null
    }
  </div>
}

export default App;
// count} today is {new Date().toLocaleString("en-US",{dateStyle:"long"})