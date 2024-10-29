import { useState } from "react";
import text from "./data";
import { nanoid } from 'nanoid';
const App = () => {
  const [count,setValue] = useState(1);
  const [textArray,setTextArray] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const numText = text.slice(0,count)
    setTextArray(numText)
    
    console.log(numText);
    
  }
  const handleInput = (e)=>{
    setValue(Number(e.target.value))
  }
  // const id = nanoid();
  return <div>
      <form className="lorem-Form">
      <input type="number" value={count} id="amount" step="1" min="1" max="8" onChange={(e)=> handleInput(e)} />
      <button type="submit" onClick={(e) => handleSubmit(e)}>submit</button>
    </form>
    
      {textArray.map((texts)=>{
        return <div style={{marginBottom:"10px"}} key={nanoid()}><p>{texts}</p></div>
      })}
    </div>
};
export default App;
