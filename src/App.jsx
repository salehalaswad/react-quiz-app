import Question from './Question';
import './App.css';
import { questions } from './assets/database';
import { useState } from 'react';

function App() {
  const [points,setPoints] = useState(0);
  const num = 2;
  return (
    <div className="App">
      <header className="App-header">
        QuizApp
      </header>

          <div className="points-counter">POINTS COUNTER: {points}</div>
          <Question key={num} question={questions[num]} points={points} setPoints={setPoints} />
      
    </div>
  );
}

export default App;
