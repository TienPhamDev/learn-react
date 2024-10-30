import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [listColor,setListColor] = useState(new Values('#f15025').all(10))
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setListColor(newColor)
    } catch (error) {
      toast.error(`Can not use ${color} plz try different string color`);
    }
    
  }
  return <main>
    <Form addColor = {addColor}/>
    <ColorList listColor = {listColor}/>
    <ToastContainer position='top-center' />
  </main>
};
export default App;
