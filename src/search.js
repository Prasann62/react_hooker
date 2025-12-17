import React,{useState,useEffect} from 'react'
import Lion from './lion.jpg'
import cat from './cat.jpg'
import dog from './dog.jpg'
import don from './gangster.jpg'
import './App.css';
export default function Textimg() {
    const [textBox1Value, setTextBox1Value] = useState('');
    const [pic, setPic]=useState(0)


    useEffect(()=>{
    if (textBox1Value==="cat")
 setPic(cat)
else if (textBox1Value==="lion")
setPic(Lion)
else if (textBox1Value==="god")
 setPic(dog)
 else if (textBox1Value==="don")
 setPic(don)
})

  return (
    <>
    <div class="position-absolute top-50 start-0 translate-middle"><h2>search a image</h2></div>
     <div className='x'><input
        type="text"
        value={textBox1Value}
        onChange={(e) => setTextBox1Value(e.target.value)}
       
      />
      <br></br>
      <br></br>
      <br></br>
<label></label>
<img src={pic} alt="" />
</div>
    </>
  )
}