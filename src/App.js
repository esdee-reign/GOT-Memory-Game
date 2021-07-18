import './App.css';
import React, {useState, useEffect} from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import Nav from './components/Nav';


const  App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore){
      setBestScore(score);
    }
  }, [score])

  return (
    <div className="app-container">
      <Nav score={score} bestScore={bestScore}/>
      <GameBoard setScore={setScore} score={score}/>
    </div>
  );
}

export default App;
