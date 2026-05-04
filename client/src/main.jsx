import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { LoginArea } from './App.jsx'
import Gaming from './Controlling.jsx'
import { NavBar } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
document.getElementById("LoadingBar").remove()
document.getElementById("RAHBAD").remove()
document.body.style.cssText=""
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<LoginArea></LoginArea>
    <App />
  </BrowserRouter>
)



