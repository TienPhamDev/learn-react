import { useState } from "react";

const ToggleChallenge = () => {
  const [state,setState] = useState(false)
  return <div>
    <button className="btn" onClick={()=>{
      state ? setState(false) : setState(true)
    }}>toggle</button>
    {state && <Alert/>}
  </div>
};
const Alert = () => {
  return <div className="alert alert-danger">hello world</div>
} 
export default ToggleChallenge;