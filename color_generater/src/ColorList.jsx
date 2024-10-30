import SingleColor from "./SingleColor";
import {nanoid} from "nanoid";
const ColorList = ({listColor}) => {
    
    return <div className="colors">
        {listColor.map((color,index) => {
            return <SingleColor color={color} index={index} key={nanoid()}/>
        })}
    </div>
}
export default ColorList;