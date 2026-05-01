import { useNavigate } from "react-router-dom";
function NotFound(){
    

    const navigate = useNavigate();
    function NAVIGATENOW(rah){
        console.log(" TIME TO NAVIGATE")
        navigate(rah)
    }
    function YEAH(){
        console.log("YEAHHAHHAHA")
    }
    
    return(
        <div  style={{position:"relative", top:"400px", display:"flex", flexDirection:"column", gap:"100px"}}>
            <p style={{color:"Black", fontSize:"100px" }}>Page ain't found.</p>
            <button className="CustomButton" onClick={()=>{NAVIGATENOW("/Home")}} style={{position:"absolute",left:"850px",top:"100px"}}>RAH GO BACK HOME</button>
        </div>
        
    );
}export default NotFound