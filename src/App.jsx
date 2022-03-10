import { useState } from "react";
import Home from './Home';
import './App.css';
import API from "./API";
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { DefaultQuestions } from './assets/database';
const App = () => {

  const [questions, setQuestions] = useState({ ...DefaultQuestions });
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="QuizApp" />
      </div>
      <Routes>
        <Route path="/" element={<Home questions={questions} />} component={Home} />
        <Route path="/api" element={<API questions={questions} setQuestions={setQuestions} />} component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*

 
*/