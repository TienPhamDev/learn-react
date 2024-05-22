const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App(){
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
}
function Logo(){
  return <h1>🏝️ Far away ?</h1>
}
function Form(){
  return (
    <form className="add-form">
      <h3>What do you want for your trip ?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </form>
  )
}
function PackingList(){
  return <div className="list">
    <ul>
      {initialItems.map(e => {
        return <Item item = {e}/>
      })}
    </ul>
    </div>
}
function Item({item}){
  return <li>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>
}
function Stats(){
  return <div className="stats">
    <em>
      You have x item on your list, and you already packed x
    </em>
  </div>
}