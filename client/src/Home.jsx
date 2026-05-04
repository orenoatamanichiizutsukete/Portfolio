import Background from "./assets/hero.png"
import { FluidDynamics } from "https://cdn.jsdelivr.net/npm/@bienehito/fluid-dynamics@latest/+esm"

import { useNavigate } from "react-router-dom";
import "./Home.css"
function DrawRAHHHH(){
    let prevX = 0;
let prevY = 0;


    const canvas = document.getElementById("c")
      const rect = canvas.getBoundingClientRect();
          var resolution = 0.5
      canvas.width = rect.width  * resolution
      canvas.height = rect.height * resolution
    // Initialize FluidDynamics.
    console.log(canvas.width)
    console.log("YEAH DA SEPARATION")

    const fd = new FluidDynamics(canvas, {
        // Set simulation to cover entire canvas. 
width: 100,
	height: 100,
	// Value to scale width and height by for resolution of simulation and dye.
	// Set these values to <1 to improve performance. The simulation shaders are executed
	// 5+pressureIterations times every update, while dye shaders are executed 2 times 
	// every update, so lowering simScale has greater effect on performance.
	simScale: 1,
	dyeScale: 1,
	// Simulation is paused.
	paused: false,
	// Percent of velocity dissipated per second via exponential decay.
	velocityDissipation: 0.1,
	// Percent of dye intensity dissipated per second via exponential decay.
	dyeDissipation: 0.1,
	// Percent of pressure dissipated per second. Increase to reduce effect of pressure waves. 
	pressureDissipation: 0,
	// Maximum interval in seconds between simulation updates to avoid instability.
	maxSimulationStep: 1 / 20,
	// Number of iterations in pressure computation. Higher number increases speed of pressure waves.
	pressureIterations: 20,
	// Amount of curl/vorticity to add to velocity.
	curl: 3,
	// What to render: dye, velocity, pressure, divergence, curl.
	renderSource: "dye",
	// Matrix to transform renderSource by. Must be either a scalar, or a Float32Array with column-major matrix4.
	renderTransforms: { velocity: 0.01, pressure: 0.01, divergence: 1, curl: 0.1},
	// Pre/post render callbacks: function(dt), where dt is time delta in seconds.
	preRender: null,
	postRender: null,
	// Whether to run update() automatically using requestAnimationFrame.
	autoUpdate: true,
	// Alpha value used in calculation of exponentially smoothed _update() run time.
	updateTimeAlpha: 1 / 120
        // See src/fluid-dynamics.js for all options.
    })
    
    
    // Add movement to the fluid by setting liquid x,y velocity to 200,10
    // in a circular area of radius 50 around point 100,80.

    // Set dye color to blue [0,0,1] to an elipsis centered on 200,80 
    // and angled 60 degrees from horizon with 100 major and 30 minor axes.

    // Add a ball at 300, 80 position moving to the left with 100 velocity.

    // Simulation will run automatically. In a few seconds...
    setTimeout(() => {

        // Ball position and velocity is updated by simulation.
        // Simulation can be paused and resumed.
        fd.paused = true
        setTimeout(() => {
            fd.paused = false
            // State of the liquid (velocity, pressure, divergence, curl) can be visualized:
            fd.renderSource = "dye"
            console.log("YUP IT'S STARTINGG")
                const DaColorPicker = new window.iro.ColorPicker("#RAHPICKER");
                const daElement = document.getElementById("RAHPICKER")
                for (let i = 0; i < daElement.children.length -1; i++) {
                    daElement.children[i].remove()
                    console.log(" WELL YEAH IT IS DELETED")
                }
                var isPressedLeft = false;
                fd.width = canvas.width
                fd.height = canvas.height
            window.addEventListener("mousemove", (e) => {
                if(e.buttons === 1){
                    isPressedLeft=true
                }
                else{
                    isPressedLeft=false
                }

                
  // mouse position inside canvas
  const x = (e.clientX - rect.left) * resolution;

  const yGL = e.clientY - rect.top;
  const y = (rect.height - yGL) * resolution;


  const dx = x - prevX;
  const dy = y - prevY;
  //const ctx = canvas.getContext("2d");
  //const imgData = ctx.getImageData(0,0,canvas.width,canvas.height)
  // direction vector
  fd.setVelocity(x,y,15,30,30,dx*400,dy*400)

  if(isPressedLeft == true){
    const DaColor = DaColorPicker.color.rgb
  fd.setDye(x,y,0,3,3,[DaColor.r,DaColor.g,DaColor.b])
  }
  // update previous
  prevX = x;
  prevY = y;
});
        }, 2000)
    }, 3000)
  }

function Home(){
    
    const navigate = useNavigate();
    function NAVIGATENOW(rah){
        navigate(rah)
    }
    function YEAH(){
        console.log("YEAHHAHHAHA")
    }

DrawRAHHHH()


    return(
        <div>

        </div>
    ); 
}
export default Home