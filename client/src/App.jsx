import { useEffect, useState, useRef} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Controlling from './Controlling';
import StarterHome from './StarterHome';
import './App.css';
import Shop from './Shop';


function TestButton(){
  return <button style={{width:"300px", height:"600px", top:"50px", left:"10px",position:"absolute"}}></button>
}

function App() {


 // useEffect(() => {
   // async function theStarter(){
    //  console.log(await fetch("http://localhost:5000/database/mango"))
     // console.log("yo it's starting")
  //  }
   // theStarter();
 // }, [])
  const [message, setMessage] = useState("")
  const RAH = useRef(0);
  function UpdateIt(){
    console.log(message)
    setMessage("RAHHHHH")
  }
    useEffect(() => {
  async function GetValue() {
    //console.log("HAIYAAAAAAAAAAAAAAAA")
      // setMessage(await fetch("http//localhost:5000"))
      RAH.current += 1
      //console.log(RAH)
      setMessage("RAH?")

        //console.log("UPDATED MESSAGE:", message)

      //console.log(`THIS DA MESSAGE${message}`)
  }
  GetValue();
  //print("HAHAH?")

  
},[message])

  function RUN(){
    setMessage("RAJ")

    console.log(`RUNNNNNN${message}`)
  } 




  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StarterHome></StarterHome>}></Route>
      <Route path="/home" element={<TestButton></TestButton>}></Route>
      <Route path="/Controlling" element={<Controlling></Controlling>}></Route>
      <Route path="/Shop" element={<Shop></Shop>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
