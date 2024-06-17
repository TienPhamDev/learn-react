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
        <span>How did you like the services?</span>
      </ServiceTips>
      <ServiceTips>
        <span>How did your friend like the service?</span>
      </ServiceTips>
    </>
  )
}
function Bill({bill , onChangeBill}){

  return <div>
    <span>How much was the bill?</span>
    <input type="text" id='bill' name='bill' value={bill} onChange={e => onChangeBill(e)} />
  </div>
}
function ServiceTips({children}){
  const [value,setValue] = useState(0)
  function handleSelect(e){
    setValue(Number(e.target.value))
  }
  return (
    <div>
      <span>{children}</span>
      <select value={value} onChange={(e) => handleSelect(e)}>
        <option value={0}>Dislike(0)</option>
        <option value={5}>Okay(5%)</option>
        <option value={10}>Like(10%)</option>
        <option value={20}>Love(20%)</option>
      </select>
    </div>
  )
}
export default App
