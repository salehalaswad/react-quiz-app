import Question from './Question';
import './App.css';
import { useState } from 'react';

function App() {
  const [points,setPoints] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        QuizApp
      </header>
          <div className="points-counter">POINTS COUNTER: {points}</div>
          <Question points={points} setPoints={setPoints} />
    </div>
  );
}

export default App;
