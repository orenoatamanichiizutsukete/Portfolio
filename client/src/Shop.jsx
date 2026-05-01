
import DaImage from "./assets/hero.png"
import "./Shop.css"

function CATALOG(){
    return <div>
        <div img src={DaImage} alt="RAH RAH DA THUMBNAIL"></div>
        <button>CLICK TO BUY</button>
        </div>
}


function Shop(){
    console.log("ITS IN ITS IN")
    return(
    <div className="CatalogsHolder">
        <CATALOG></CATALOG>
        <CATALOG></CATALOG>
        <CATALOG></CATALOG>
        <CATALOG></CATALOG>
        <CATALOG></CATALOG>
        </div> 
    )
}
export default Shop