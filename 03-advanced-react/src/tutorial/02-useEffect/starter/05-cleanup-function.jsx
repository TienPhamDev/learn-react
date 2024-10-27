import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle,setToggle] = useState(false)
  return <div>
    <button className="btn" onClick={()=>{setToggle(!toggle)}}>toggle Component</button>
    {toggle && <SecondComponent/>}
  </div>;
};
const SecondComponent= () => {
  useEffect(()=>{
    const h2Effect = document.querySelector("#secondCom")
    h2Effect.style.backgroundColor = "red"
    console.log("This is interesting");
  },[])
  return <div>
    <h2 id="secondCom" >Second Component</h2>
  </div>
}
export default CleanupFunction;
