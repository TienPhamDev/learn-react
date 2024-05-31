import { useState } from "react";
import PropTypes from "prop-types"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App(){
  const [items, setItems] = useState([])
  
  function handleClearList() {
    const confirm = window.confirm(
      "are you sure"
    )
    if (confirm) setItems([])
  }
  function handleAddItem(item){
    setItems((items) => [...items,item])
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }
  return <div className="app">
    <Logo/>
    <Form onAddItems ={handleAddItem} onChangeItem={handleToggleItem} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onChangeItem={handleToggleItem} onClearList={handleClearList } />
    <Stats items={items } />
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
function PackingList({ items, onDeleteItem, onChangeItem ,onClearList}) {
  const [sortBy, setSortBy] = useState("input")
  // sort list
  let sortedItems;
  if (sortBy === "input") sortedItems = items
  if (sortBy === "description") sortedItems = items
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === "packed") sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed))
  
  
  return <div className="list">
    <ul>
      {sortedItems.map(e => {
        return <Item item={e} key={e.id} onDeleteItem={onDeleteItem } onChangeItem={onChangeItem} />
      })}
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
        
    </div>
}
function Item({item,onDeleteItem,onChangeItem}){
  return <li>
    <input type="checkbox" value={item.packed} onChange={()=>{onChangeItem(item.id)}} />
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>
}
function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    )
  }
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((numPacked/numItems)*100)
  return <div className="stats">
    <em>
      {
        percentage === 100 ? "You got everything! Ready to go"
        :
        `You have ${numItems} item on your list, and you already packed ${numPacked}, ${percentage}%`
      }
    </em>
  </div>
}