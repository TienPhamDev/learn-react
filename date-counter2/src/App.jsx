import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handlePlusStep() {
    setStep((s)=> s+1)
  }
  function handleMinusStep() {
    setStep((s)=> s-1)
  }
  function handlePlusCount() {
    
    setCount(s => s + step)
  }
  function handleMinusCount() {
    setCount(s => s - step)
  }
  const date = new Date();
  date.setDate(date.getDate() + count)
  return <div style={{ textAlign: "center" }}>
    <div>
      <button onClick={handleMinusStep}>-</button><span>step : {step}</span><button onClick={handlePlusStep}>+</button>
    </div>
    <div>
      <button onClick={handleMinusCount}>-</button><span>Count : {count}</span><button onClick={handlePlusCount}>+</button>
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
  </div>
}

export default App;
// count} today is {new Date().toLocaleString("en-US",{dateStyle:"long"})