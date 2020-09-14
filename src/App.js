import React, { useState, useEffect } from "react";
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
    setCpuHand(cpuInput);
  }

  function cpuHandSelect() {
    var cpuChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (cpuChoice === 1) {
      return "rock";
    } else if (cpuChoice === 2) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  useEffect(() => {
    if (myHand === cpuHand && myHand !== undefined) {
      setCount((prevCount) => prevCount + 1);
      setCpuCount((prevCount) => prevCount + 1);
    }
    else if(myHand === "rock" && cpuHand === "scissor") {
      setCount((prevCount) => prevCount + 1);
    }
    else if(myHand === "paper" && cpuHand === "rock") {
      setCount((prevCount) => prevCount + 1);
    }
    else if(myHand === "scissor" && cpuHand === "paper") {
      setCount((prevCount) => prevCount + 1);
    }


    else if(cpuHand === "rock" && myHand === "scissor") {
      setCpuCount((prevCount) => prevCount + 1);
    }
    else if(cpuHand === "paper" && myHand === "rock") {
      setCpuCount((prevCount) => prevCount + 1);
    }
    else if(cpuHand === "scissor" && myHand === "paper") {
      setCpuCount((prevCount) => prevCount + 1);
    }
    
    
  }, [myHand, cpuHand]);

  console.log(`myhand: ${myHand} \ncpuhand: ${cpuHand}`);
  return (
    <main>
      <div className="title-wrapper">
        <h1>Choose</h1>
      </div>

      <div className="hand-wrapper">
        <img
          className="hand"
          src={Rock}
          alt="rock"
          onClick={() => pickWinner("rock")}
        />
        <img
          className="hand"
          src={Paper}
          alt="paper"
          onClick={() => pickWinner("paper")}
        />
        <img
          className="hand"
          src={Scissor}
          alt="scissor"
          onClick={() => pickWinner("scissor")}
        />
      </div>
      <div className="choices">
        <p>{myHand}</p>
        <p>{cpuHand}</p>
      </div>

      <div className="counter-wrapper">
        <h4>{count}</h4>
        <h4>{cpuCount}</h4>
      </div>
    </main>
  );
}

export default App;
