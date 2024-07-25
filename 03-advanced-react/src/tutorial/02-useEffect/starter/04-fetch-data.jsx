import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users,setUsers] = useState([])

  useEffect(() => {
    async function usersData () {
      try {
        const res = await fetch(url)
        const data = await res.json();
        setUsers(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    usersData()
  },[])
  return <>
    <h2>fetch data example</h2>
    <main style={{margin:"24px auto",width:"40%"}}>
      <ul >
        {
          users.map((user) => {
            return <li key={user.id} style={{display:"flex",gap:"28px",margin:"16px 0"}}>
              <img src={user.avatar_url} alt="avatar" style={{width:"75px",height:"75px"}}/>
              <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
                <h3 style={{margin:"0px"}}>{user.login}</h3>
                <a href={user.url} >Profile</a>  
              </div>
            </li>
          })
        }
      </ul>
    </main>
  </> 

};
export default FetchData;
