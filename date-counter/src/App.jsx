import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function daysBetween(count) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    const currentDate = new Date();

    // const diffDays = Math.round(Math.abs((currentDate + count) / oneDay));
    // const resultDate = new Date(diffDays).toLocaleString("en-US",{dateStyle:"long"})
    return currentDate;
  }
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
    <p>{
      count === 0 ?
        `today is ${new Date().toLocaleString("en-US", { dateStyle: "long" })}`
        : 
        `${count} days from today is ${daysBetween(count)}`
      }
    </p>
  </div>
}
export default App;
// count} today is {new Date().toLocaleString("en-US",{dateStyle:"long"})