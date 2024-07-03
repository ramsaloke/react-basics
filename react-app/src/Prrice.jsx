export default function Prrice({oldPrice,newPrice}){

    let oldStyles = {
        textDecorationLine:"line-through",
    };

    let newStyles = {
        fontWeight:"bold",
    };

    let styles = {
        backgroundColor:"yellow",
        height:"30px",
        borderBotoomLeftRadius: "15px",
        borderBotoomRightRadius: "15px",
        justifyContet:"center",
        textAlign:"center",

    };
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; 
            &nbsp; 
            &nbsp;  
            <span style={newStyles}>{newPrice}</span>

        </div>
    )
}