import "./App.css";
import { useState } from 'react';
 function App() {
    const [ x,setx]=useState('0')
    const [ y,sety]=useState('0')
  return (
    <>
    <center><h3>simple calculater</h3></center>
    <div class="calculator">
      
    <div class="display">
     <input type="number" id="a1" placeholder=" enter a number" value={x} onChange={(e)=>setx(e.target.value)}/><br></br>
     <input type="number" id="a2" placeholder=" enter a number" value={y} onChange={(e)=>sety(e.target.value)}/><br></br>
     </div>
     
      <div id="a3">{parseInt(x)+parseInt(y)}</div>
      <div id="a4">{parseInt(x)-parseInt(y)}</div>
      <div id="a5">{parseInt(x)*parseInt(y)}</div>
      <div id="a6">{parseInt(x)/parseInt(y)}</div>
      </div>
    </>
  );
}

export default App;