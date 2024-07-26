import { useState } from "react";

const UserChallenge = () => {
  const [user,setUser] = useState(null)
  function handleLogin(){
    
    setUser({name:"Tien Pham"})
  }
  const handleLogout = () =>{
    setUser(null)
  }
  return <div>
    {user === null ? <LogOut user={user} handleLogin={handleLogin}/> : <LogIn user={user} handleLogout={handleLogout}/>}
  </div>
};
const LogIn = ({user,handleLogout}) => {
  return <>
    <h4>hello there, {user.name}</h4>
    <button className="btn" onClick={handleLogout}>logout</button>
  </>
}
const LogOut = ({user,handleLogin}) => {
  return <>
    <h4>please Login</h4>
    <button className="btn"  onClick={handleLogin}>logIn</button>
  </>
}
export default UserChallenge;
