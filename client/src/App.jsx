import { useEffect, useState, useRef} from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Controlling from './Controlling';
import StarterHome from './StarterHome';
import './App.css';
import Shop from './Shop';
import Home from './Home';
import About from './About'
import Goals from './Goals';
import NotFound from './NotFound';
import { OAuth, OAuth2} from 'oauth';
import { Outlet } from 'react-router-dom';
import Projects from './Projects';
function TestButton(){
  return <button style={{width:"300px", height:"600px", top:"50px", left:"10px",position:"absolute"}}></button>
}
function Layout(){
  return(
    <div>
      <h1>RAHH HAHAA</h1>
      <Outlet/>
    </div>
  );
}

export function LoginArea(){
  
}
export function NavBar(){
  const DaLocation = window.location.pathname;
let HomeColor = "black";
let AboutColor = "black";
let ProjectsColor = "black";
      console.log("YUP IT IS HERE")
      HomeColor = "black"
      AboutColor = "black"
      ProjectsColor = "black"
    if(DaLocation.toLowerCase() == "/home"){
      HomeColor = "white"
    }
    else if(DaLocation.toLowerCase() == "/about"){
      AboutColor = "white"
    }
    else if(DaLocation.toLowerCase() == "/projects"){
      ProjectsColor = "white"
    }
    const navigation = useNavigate();
  console.log("FINALLY NAV")
  return(
      <nav className='NavBar'>
      <div className='NavText' style={{color:HomeColor}} onClick={()=>{navigation("/Home")}}>Home</div>
      <div className='NavText'  style={{color:AboutColor}} onClick={()=>{navigation("/About")}}>About</div>
      <div className='NavText' style={{color:ProjectsColor}} onClick={()=>{navigation("/Projects")}}>Projects Done</div>
    </nav>
  );
}


export function NewPage(){
  

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

  let [DaUpdater] = useState(0)








  return (

    <Routes>
    <Route element={<Layout></Layout>}></Route>
    <Route path="/" element={<StarterHome></StarterHome>}></Route>
    <Route path="/Home" element={<Home></Home>}></Route>
    </Routes>


  )
}

export default App
