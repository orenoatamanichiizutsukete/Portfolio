import { useNavigate } from "react-router-dom"

function StarterHome(){
    console.log("every variable")
    const navigate = useNavigate();
    navigate("/Home", {replace: true})
    async () =>{
        
    return await fetch("api/Controlling") 
    } 
}
export default StarterHome