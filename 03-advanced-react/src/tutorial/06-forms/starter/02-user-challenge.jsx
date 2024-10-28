import { useState } from "react";

const UserChallenge = (props) => {
  
  const [name,setName] = useState("");
  const [data,setData] = useState(props.data);
  const handleAddSubmit = (e)=>{
    e.preventDefault();
    if(!name) return;
    const fakeId = Date.now();
    setData([...data,{
      id: fakeId,
      name: name
    }])
    
  }
  const handleRemoveSubmit = (id)=>{
   
    const updateUsers = data.filter((user)=> {return user.id !== id})
    setData(updateUsers)
  }
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name}
          onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'
          onClick={handleAddSubmit}
        >
          submit
        </button>
        
      </form>
      {
        data.map((user)=>{
          return <div key={user.id}>{user.name}
            <button type='submit' className='btn btn-block'
              onClick={() => handleRemoveSubmit(user.id)}
            >
              remove
            </button> 
              </div>
        })
      }
    </div>
  );
};
export default UserChallenge;
