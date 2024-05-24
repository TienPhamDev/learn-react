import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App(){
  const [items,setItems] = useState([])
  function handleAddItem(item){
    setItems((items) => [...items,item])
  }
  return <div className="app">
    <Logo/>
    <Form onAddItems ={handleAddItem}/>
    <PackingList items = {items}/>
    <Stats/>
  </div>
}
function Logo(){
  return <h1>🏝️ Far away ?</h1>
}
function Form({onAddItems}) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  

  
  function handleSubmit(e) {
    e.preventDefault();
    
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)

    onAddItems(newItem)
    setDescription("")
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for your trip ?</h3>
      <select value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).
          map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item ..." value={description}
        onChange={e => setDescription(e.target.value)} />
      <button >ADD</button>
    </form>
  )
}
function PackingList({ items }){
  return <div className="list">
    <ul>
      {items.map(e => {
        return <Item item = {e} key={e.id}/>
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