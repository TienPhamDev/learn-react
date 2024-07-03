export default function StarRating(){
    const containerStyle = {
        display : "flex",
        alignItem : "center",
        gap : "16px",
    }
    const starStyle ={
        display : "flex",
        gap : "4px"
    }
    const textStyle = {
        lineHeight : "1",
        margin : "0"
    }
    return (
    <div style={containerStyle}>
       <div style={starStyle}>
        {Array.from({length:5},(_,i) => <span>S{i+1}</span>)}

       </div>
       <p style={textStyle}>10</p> 
    </div>)
}