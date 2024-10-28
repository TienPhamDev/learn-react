
import CleanupFunction from "./tutorial/02-useEffect/starter/05-cleanup-function"
import UserChallenge from "./tutorial/06-forms/starter/02-user-challenge"
import { data } from "./data.js"
function App() {
  const dataUser = data
  return (
    <div className='container'>
      <UserChallenge data={dataUser}/>
    </div>
  );
}

export default App;
