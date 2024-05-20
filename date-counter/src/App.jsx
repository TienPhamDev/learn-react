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
  return <div style={{ textAlign: "center" }}>
    <div>
      <button onClick={handleMinusStep}>-</button><span>step : {step}</span><button onClick={handlePlusStep}>+</button>
    </div>
    <div>
      <button onClick={handleMinusCount}>-</button><span>Count : {count}</span><button onClick={handlePlusCount}>+</button>
    </div>
    <p></p>
  </div>
}

export default App;
// count} today is {new Date().toLocaleString("en-US",{dateStyle:"long"})