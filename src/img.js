import { useState } from "react";
import "./App.css";

export default function App() {
  const [like, setLike] = useState(0);
  const [love, setLove] = useState(0);
  const [laugh, setLaugh] = useState(0);
  const [wow, setWow] = useState(0);
  const [sad, setSad] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Emoji Counter</h1>
      <div className="row">

      <div class="col-sm-1"></div>


      <div class="col-sm-2"  id="a1">
      <div style={{ margin: "20px" }}>
        <button onClick={() => setLike(like + 1)} style={{ fontSize: "40px" }}>
        <img src="like.jpg" style={ {height:"50px", width:"50px"}}></img>
        </button>
        <p>{like}</p>
      </div>
      </div>

      <div class="col-sm-2"id="a1">
      <div style={{ margin: "20px" }}>
        <button onClick={() => setLove(love + 1)} style={{ fontSize: "40px" }}>
        <img src="heart.jpg" style={ {height:"50px", width:"50px"}}></img>
        </button>
        <p>{love}</p>
      </div>
      </div>

      <div class="col-sm-2"id="a1">
      <div style={{ margin: "20px" }}>
        <button
          onClick={() => setLaugh(laugh + 1)}
          style={{ fontSize: "40px" }}>
          <img src="lol.jpg" style={ {height:"50px", width:"50px"}}></img>
        </button>
        <p>{laugh}</p>
      </div>
      </div>

      <div class="col-sm-2"id="a1">
      <div style={{ margin: "20px" }}>
        <button onClick={() => setWow(wow + 1)} style={{ fontSize: "40px" }}>
        <img src="wow.jpg" style={ {height:"50px", width:"50px"}}></img>
        </button>
        <p>{wow}</p>
      </div>
      </div>

      <div class="col-sm-2"  id="a1">
      <div  style={{ margin: "20px" }}>
        <button onClick={() => setSad(sad + 1)} style={{ fontSize: "40px" }}>
        <img  src="sad.jpg" style={ {height:"50px", width:"50px"}}></img>
        </button>
        <p>{sad}</p>
      </div>
      </div>
      <div class="col-sm-1"></div>
      </div>
    </div>
    
  );
}