
import { useEffect, useState } from "react";
import "./Controlling.css"

function Controlling(){
    const [DAPE,setDAPE] = useState("30000px")
    async function HAHHAHA(){
        console.log("ERRORrah")
        const res = await fetch("http://localhost:5000/Controlling").then(rah=>{
            if(!rah.ok) throw new Error("BAD BRUV")
            return rah
        }).catch(GRra =>{
            console.log(`${GRra} "GRRR THIS IS NO DINO" `)
        })
        console.log("HAHAH?")
        console.log(res)
    }
    useEffect(()=>{
        HAHHAHA()
    },[])

    async function WAITCAMERA(){
        //const rah = navigator.mediaDevices.enumerateDevices()
        //console.log(rah)
        
    
    }
    async function TESTCAMERA(){

        const stream = await navigator.mediaDevices.getDisplayMedia();
        console.log(stream);
    }
    function CREATECONNECTION(){
        const newConnection =  RTCPeerConnection()
        console.log(newConnection)
    }
    function ChangeIT(){
        setDAPE("0px")
    }
    return(
    <button onClick={ChangeIT} style={{width: DAPE,height: "3000px"}}>INOCHI NANTE</button>
    
    )



}
export default Controlling