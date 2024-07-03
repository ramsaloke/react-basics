import "./Prroduct.css";
import Prrice from "./Prrice";
function Product({title,idx}){
    let oldPrices = ["1,233","999","1,765","1,299",];
    let newPrices = ["899","799","1,599","999"];

    let Description=[["9,000 DPI","5 programmable buttons"],
    ["intuitive surface","designed for i pad pro"],
    ["wireless","intuitive surface"],
    ["designed for i pad pro","wireless"],
];

    let titleStyle = {
        fontWeight:"bold",
    };
    let styles={
        justifyContent:"center",
        textAlign:"center",
    }
    return(
        <div className="Product" style={styles}>
            
            <p style={titleStyle}>{title}</p>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Prrice oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Prrice>
              
        </div>
    );
}
export default Product;