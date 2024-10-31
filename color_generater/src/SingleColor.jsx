import { toast } from "react-toastify"

const SingleColor = ({color,index}) => {
    const {hex,weight} = color
    const addToClipboard = async () => {
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success("Color copied to clipboard")
            } catch (error) {
                toast.error("Can not copied to clipboard")
            }
        } else {
            toast.error("Clipboard not available.")
        }
    }
    return <article 
        className={index > 10 ? "color color-light" : "color"} 
        style={{backgroundColor:`#${hex}`}}
        onClick={addToClipboard}
        >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
    </article>
}
export default SingleColor;