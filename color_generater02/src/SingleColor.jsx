import { toast } from "react-toastify"

const SingleColor = ({color,index}) => {
    const {hex,weight} = color
    const addColorToClipboard = async (color) => {
        if(navigator.clipboard){

            try {
                await navigator.clipboard.writeText(color)
                toast.success("Copied color to clipboard!")
            } catch (error) {
                toast.error(`Can't copied to clipboard!`)
                
            }
        } else{
            toast.error("Clipboard not available!")
        }
    }
    return <article className={index > 10 ? "color color-light" : "color"} 
        onClick={()=> addColorToClipboard(`#${hex}`)}
        style={{backgroundColor:`#${hex}`}}
        >
        <p className="color-value">#{hex}</p>
        <p className="percent-value">{weight}</p>
    </article>
}
export default SingleColor;