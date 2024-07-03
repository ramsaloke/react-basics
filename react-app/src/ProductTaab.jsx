
import Product from "./Prroduct.jsx";
function ProductTaab(){
    
    let styles = {
        display:"flex",
        flexwrap:"wrap",
        justifyContet:"center",
        alignItems:"center",
        textAlign:"center",
       
    };
    return(
        <div style={styles}>
      
        <Product title= "Logitech MX Master" idx={0 } ></Product>
        <Product title= "Apple Pencil (2nd Gun" idx={1 } ></Product>
        <Product title= "Zebronics Zeb-transformer" idx={2 } ></Product>
        <Product title= "Petronics Toad 23" idx={3 }></Product>

        </div>
    );
}
export default ProductTaab;
