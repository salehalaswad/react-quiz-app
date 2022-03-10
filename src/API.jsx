import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./API.css"
const API = ({ questions, setQuestions }) => {
    const [options, setOptions] = useState(
        {
            1: "",
            2: "",
            3: "",
            4: ""
        }
    );
    const [answer, setAnswer] = useState(1);
    const [question, setQuestion] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOptions({ ...options, [name]: value })
    }
    const handleRadioChange = e => {
        const { value } = e.target;
        setAnswer(value);
    }
    const handleTextAreaChange = (e) => {
        const { value } = e.target;
        setQuestion(value)
    }
    const handleSubmit = () => {
        const questionsCount = Object.keys(questions).length;
        setQuestions({
            ...questions,
            [questionsCount + 1]: {
                text: question,
                options: options,
                answer: answer
            }
        });

    }
    return (
        <div className="api">
            <div className="container">
                <h3>Add Questions to the Database</h3>
                <form>
                    <label>
                        <textarea className="question-text"
                            name="question"
                            onChange={handleTextAreaChange}
                            style={{ resize: 'none' }}
                            placeholder="type question text here"
                            value={question}
                            rows={1}
                        />
                    </label>
                    <div className="radio-container">

                        {Object.keys(options).map(([key, value]) => (
                            <div key={key} className="radio">
                                <label>
                                    <input className="input-radio" type="radio" value={key} checked={answer == key ? true : false} onChange={handleRadioChange} />
                                    <input className="input-text" type="text" name={key} onChange={handleInputChange} />
                                </label>
                            </div>
                        ))}
                    </div>
                    <Link to="/" >
                        <button onClick={handleSubmit} >
                            ADD QUESTION
                        </button>

                    </Link>
                </form>
            </div>
        </div>
    )
}

export default API;