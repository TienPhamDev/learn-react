import { useState } from "react";

const Form = ({addColor}) => {
    const [valueColor,setValueColor] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        addColor(valueColor)
    }
    return <section className="container">

        <form className="color-form" onSubmit={(e)=>handleSubmit(e)}>
            <input type="color" name="color" id="color" value={valueColor} onChange={(e) => setValueColor(e.target.value)}/>
            <input type="text" name="text" id="text" value={valueColor} onChange={(e) => setValueColor(e.target.value)}/>
            <button type="submit" className="btn">Submit</button>
        </form>
    </section>
}
export default Form;
