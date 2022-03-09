import React, { useEffect, useState } from 'react';
import { questions } from './assets/database';

const Question = ({ setPoints, points }) => {
    const [questionNum, setQuestionNum] = useState(1);
    const [question, setQuestion] = useState(questions[questionNum]);
    const [options, setOptions] = useState(question.options);
    useEffect(() => {
        setQuestion(questions[questionNum]);
        setOptions(questions[questionNum].options);
    }, [questionNum]);
    const handleOptionClick = (e) => {
        const isTrue = e.target.value === question.options[question.answer];
        if (isTrue) {
            setPoints(points + 1);
            handleNextQClick();
        }
        else if (points > 0) {
            setPoints(points - 1);
        }
    }
    const handleR2OClick = (e) => {
        const falseOptions = Object.keys(options)
            .filter((key) => key != question.answer)
            .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {});
        console.log("falseOptions", falseOptions);
        const randomFalseOption = Object.keys(falseOptions)
        [Math.floor(Math.random() * Object.keys(falseOptions).length)];
        console.log("randomFalseOption", randomFalseOption);
        const twoOptions = {
            ...Object.keys(options).filter((key) => key == question.answer)
                .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {}),
            ...Object.keys(options).filter((key) => key == randomFalseOption)
                .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {})
        }
        setOptions(twoOptions);
        console.log("twoOptions", randomFalseOption);
    }
    const handleNextQClick = () => {
        console.log(Object.keys(questions).length);
        console.log(questionNum);
        if (questionNum === Object.keys(questions).length) {

            setQuestionNum(1);
        } else {
            setQuestionNum(questionNum + 1);
            console.log(questionNum);
        }

    }
    return (
        <div className="container">
            <h2>Question </h2>
            <p className="question-text">{question.text}</p>
            <div className="panel">
                <div className="choices">
                    {Object.entries(options).map(([key, value]) =>
                        <button key={key}
                            value={value}
                            onClick={handleOptionClick}
                        >{value}</button>
                    )}
                </div>
                <div className="options">
                    <button onClick={handleR2OClick} >50:50</button>
                    <button onClick={handleNextQClick} >next Question</button>
                </div>
            </div>
        </div>
    )
}

export default Question;