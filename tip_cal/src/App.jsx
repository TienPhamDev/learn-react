import { useState } from 'react'
import './App.css'

function App() {
  const [bill,setBill] = useState(0)
  function handleInput(e){
    setBill(Number(e.target.value))
  }
  const [percentage1,setPercentage1] = useState(0)
  const [percentage2,setPercentage2] = useState(0)
  return (
    <>
      <Bill bill={bill} onChangeBill = {handleInput}/>
      <ServiceTips value = {percentage1} onChangeValue={setPercentage1}>
        How did you like the services?  
      </ServiceTips>
      <ServiceTips value={percentage2} onChangeValue={setPercentage2}>
        How did your friend like the service? 
      </ServiceTips>
      <OutPut bill = {bill} percentage1 = {percentage1} percentage2 ={percentage2}/>
      <Reset onChangeBill={setBill} onChangePercent1 = {setPercentage1} onChangePercent2 ={setPercentage2}/>
    </>
  )
}
function Bill({bill , onChangeBill}){

  return <div>
    <label>How much was the bill?</label>
    <input type="text" value={bill} onChange={e => onChangeBill(e)} />
  </div>
}
function ServiceTips({value,onChangeValue,children}){
  
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={(e) => onChangeValue(Number(e.target.value))}>
        <option value={0}>Dislike(0)</option>
        <option value={5}>Okay(5%)</option>
        <option value={10}>Like(10%)</option>
        <option value={20}>Love(20%)</option>
      </select>
    </div>
  )
}
function OutPut({bill,percentage1,percentage2}){
  const total = bill + (bill * (percentage1 - percentage2)/100)
  return <h3>
    You pay {total} ({bill} + {bill * (percentage1 - percentage2)/100} tip)
  </h3>
}
function Reset({onChangeBill,onChangePercent1,onChangePercent2}){
  function handleClick(){
    onChangeBill(0)
    onChangePercent1(0)
    onChangePercent2(0)
  }
  return <button onClick={handleClick}>Reset</button>
}
export default App
