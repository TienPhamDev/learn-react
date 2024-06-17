import { useState } from 'react'
import './App.css'

function App() {
  const [bill,setBill] = useState(0)
  function handleInput(e){
    setBill(Number(e.target.value))
  }
  return (
    <>
      <Bill bill={bill} onChangeBill = {handleInput}/>
      <ServiceTips>
        How did you like the services?  
      </ServiceTips>
      <ServiceTips>
        How did your friend like the service? 
      </ServiceTips>
      <OutPut />
      <Reset />
    </>
  )
}
function Bill({bill , onChangeBill}){

  return <div>
    <label>How much was the bill?</label>
    <input type="text" value={bill} onChange={e => onChangeBill(e)} />
  </div>
}
function ServiceTips({children}){
  const [value,setValue] = useState(0)
  function handleSelect(e){
    setValue(Number(e.target.value))
  }
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={(e) => handleSelect(e)}>
        <option value={0}>Dislike(0)</option>
        <option value={5}>Okay(5%)</option>
        <option value={10}>Like(10%)</option>
        <option value={20}>Love(20%)</option>
      </select>
    </div>
  )
}
function OutPut(){
  return <h3>
    You pay X ($a + $b tip)
  </h3>
}
function Reset(){
  return <button>Reset</button>
}
export default App
