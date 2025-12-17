import React from 'react'
import "./App.css";
import { useState } from 'react';
 function Mark() {
    const [ ta,setx]=useState('')
    const [ en,sety]=useState('')
    const [ ma,setm]=useState('')
    const [ sc,sets]=useState('')
    const [ ph,setp]=useState('')
    const [ so,seti]=useState('')
    const [ cof,setcof]=useState('')
    const [ tot,settot]=useState('')
    const [ totc,settotc]=useState('')


    const cf=()=>{
        setcof(parseInt(ma)+(parseInt(sc)/2)+(parseInt(ph)/2))
        settot(parseInt(ta)+parseInt(en)+parseInt(ma)+parseInt(sc)+parseInt(so))
        settotc(parseInt(ta)+parseInt(en)+parseInt(ma)+parseInt(sc)+parseInt(so)/5)
    }
  return (
    <>
    <center> <h2>student mark</h2></center>
   <div className="ma">
    <div><label  id="lb2"  >tamil: <input type="number" value={ta} onChange={(e)=>setx(e.target.value)}/></label></div>
    <div><label  id="lb2"> english: <input type="number" value={en} onChange={(e)=>sety(e.target.value)}/></label></div>
    <div><label id="lb2">maths: <input type="number" value={ma} onChange={(e)=>setm(e.target.value)}/></label></div>
    <div><label id="lb2"> chimetry:<input type="number" value={sc} onChange={(e)=>sets(e.target.value)}/></label></div>
    <div><label id="lb2"> physics:<input type="number" value={ph} onChange={(e)=>setp(e.target.value)}/></label></div>
    <div><label id="lb2"> cs:<input type="number" value={so} onChange={(e)=>seti(e.target.value)}/></label></div>
      <div><button type="submit" onClick={cf}>sumbit</button></div>

    <div><label id="lb2"> total mark: {tot}</label></div>
    <div><label id="lb2"> total: {totc}</label></div>
    <div> <label id="lb2"> cut off:{cof} </label></div>
    </div>
    
    
    </>
  );
}
export default Mark;