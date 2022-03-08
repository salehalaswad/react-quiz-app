import Question from './Question';
import './App.css';
import { questions } from './assets/database';

function App() {
  const num = 2;
  return (
    <div className="App">
      <header className="App-header">
        bla
      </header>

      {/* {Object.keys(questions).map(
        key=> 
        <Question key={key} question={questions[key]} />
      )} */}

    
          <Question key={num} question={questions[num]} />
      
    </div>
  );
}

export default App;
