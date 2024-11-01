import {nanoid} from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({colors}) => {
    return <div className="colors">
        {
            colors.map((color,index)=>{
                return <SingleColor key={nanoid()} color={color} index={index} />
            })
        }
    </div>
}
export default ColorList;