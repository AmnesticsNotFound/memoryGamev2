import { useState } from 'react';
import Card from './Card.jsx';
import '/public/style/App.css';
import cardDAta from '../data/CardData.js';
import cardData from '../data/CardData.js';
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickStatuses, setStatuses] = useState(cardData);
  
  
  //console.log(clickStatuses);

  if(score > highScore) {
    setHighScore(score);

  }

  // updates the state of the cards. When it is clicked for the first time, its status is set to true and the score resets
  function clickUpdate(e) {
    //console.log("Active!");
    
    if (e.target.dataset.value == "false") {
      console.log(e.target.name);
      setStatuses(clickStatuses.map((entry) => {
        
        if(entry.name == e.target.name) {
          console.log("Set: true");
          entry.isClicked = "true";
          //console.log(entry);
          
        }
        return entry;
      })
      )
      setScore(score + 1);
    }
    else {
      console.log("Set: false");
      setScore(0);
      setStatuses(clickStatuses.map((entry) => {
        entry.isClicked = false;
        return entry;
    }))
    }

    randomize();
  }

  //randomizes array so images are random. Simply takes copies of state array and loops through length and selects a random index
  // then removes it from the first copy and adds it to the second. The selected index is removed so that it is not selected again
  function randomize() {
    let tmpArray = clickStatuses.slice();
    let finalArray = clickStatuses.slice();
    //console.log(tmpArray);

    for(let i = 0; i < clickStatuses.length; ++i) {
        let x = Math.floor(Math.random() * tmpArray.length);
        finalArray[i] = tmpArray[x];
        tmpArray.splice(x, 1);
    }
    console.log(finalArray);
    setStatuses(finalArray);
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Memory Game</h1>
        </div>
        <div className="scores">
          <h3>Score:{score}</h3>
          <h3>High Score:{highScore}</h3>
        </div>
      </div>
      {
        //outputs the Cards in array
      }
      <div className="cards">
      {clickStatuses.map((entry, index)=> {
      //console.log(status);
      return (
      <Card key={entry.name} name={entry.name} clickUpdate={clickUpdate} isClicked={entry.isClicked} src={entry.src}></Card>
      )
    })}
    </div>
    </>
  )
}

export default App

/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */