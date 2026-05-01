import Background from "./assets/hero.png"
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home(){
    
    const navigate = useNavigate();
    function NAVIGATENOW(rah){
        navigate(rah)
    }
    function YEAH(){
        console.log("YEAHHAHHAHA")
    }

    return(
        <div className="BackgroundRah">
            <div className="Parent">
                <h1 className="Title2">So have you ever felt like you want a custom website? NO?</h1>
                <h2 className="Title1">okay whenever you want a website even tho i'm inexperienced... well at least it's free for now so...</h2>
                <div className="ButtonParent">
                    <button className="CustomButton" onClick={()=>{window.location.href="mailto:kingbadi277@gmail.com?cc=friend@gmail.com&subject=Hi&body=Test message"}}>Order</button>
                    <button className="CustomButton" onClick={()=>{NAVIGATENOW("/About")}}>More Info</button>
                </div>

                <title>RAH?</title>
            </div>
        </div> 
    ); 
}
export default Home