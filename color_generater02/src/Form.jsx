import { useState } from "react";

const Form = ({addColor}) => {
    const [valueColor,setValue] = useState("#fdfdfd");
    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor(valueColor);
    };
    return <section className="container">
        <h4>Color Generater</h4>
        <form className="color-form" onSubmit={(e)=>handleSubmit(e)}>
            <input type="color" name="colorInput" id="color" 
                value={valueColor} 
                onChange={(e)=> setValue(e.target.value)} />
            <input type="text" name="hexColor" id="hexColor" 
                value={valueColor} 
                onChange={(e)=> setValue(e.target.value)}/>
            <button className="btn">Add Color</button>
        </form>
    </section>
}
export default Form;