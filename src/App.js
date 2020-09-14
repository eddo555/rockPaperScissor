import React, { useState } from "react";
import Rock from "./img/rock.png";
import Paper from "./img/paper.png";
import Scissor from "./img/scissor.png";

function App() {
  const [myHand, setMyHand] = useState();
  const [cpuHand, setCpuHand] = useState();
  const [count, setCount] = useState(0);
  const [cpuCount, setCpuCount] = useState(0);

  function pickWinner(input) {
    
    const cpuInput = cpuHandSelect();
    setMyHand(input);
    setCpuHand(cpuInput)
  }

  function cpuHandSelect() {
    var choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (choice === 1) {
      return 'rock'
    } else if (choice === 2) {
      return 'paper'
    } else {
      return 'scissor'
    }
  }


  return (
    <div
      style={{ backgroundColor: "#80FF72", width: "100vw", height: "100vh" }}
    >
      <h1>Choose</h1>
      <img src={Rock} alt="rock" onClick={() => pickWinner("rock")} />
      <img src={Paper} alt="paper" onClick={() => pickWinner("paper")} />
      <img src={Scissor} alt="scissor" onClick={() => pickWinner("scissor")} />
      <h4>{count}</h4>
      <h4>{cpuCount}</h4>
    </div>
  );
}

export default App;
