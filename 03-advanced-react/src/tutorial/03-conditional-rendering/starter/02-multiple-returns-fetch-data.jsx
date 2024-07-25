import { useEffect, useState } from 'react';
import FetchData from '../../02-useEffect/starter/04-fetch-data';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [users,setUsers] = useState(null)
  useEffect(()=>{
    
    async function fetchData(){
      try {
        const res = await fetch(url)
        if(!res.ok){
          setIsError(true)
          setIsLoading(false)
          return ;
        }
        const data = await res.json()
        console.log(data)
        setUsers(data)

      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    
    fetchData()
  },[])
  //check is loading ?
  if(isLoading){
    return <h2>Loadding ...</h2>
  }
  if(isError){
    return <h2>Something when wrong ...</h2>
  }
  const {avatar_url,name,company,bio} = users
  return <div>
    <img src={avatar_url} alt={name} style={{width:"150px"}}/>
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <p>{bio}</p>
  </div>
  
};
export default MultipleReturnsFetchData;
