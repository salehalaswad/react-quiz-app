import React, { useEffect, useState, useCallback } from 'react';
import {useNavigate} from "react-router-dom";

const Question = ({ questions, setPoints, points }) => {

    const [questionNum, setQuestionNum] = useState(1);
    const [question, setQuestion] = useState(questions[questionNum]);
    const [options, setOptions] = useState(question.options);
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => navigate('/wone', { replace: true }), [navigate]);
    useEffect(() => {

        setQuestion(questions[questionNum]);
        setOptions(questions[questionNum].options);
    }, [questionNum]);
    const handleOptionClick = (e) => {
        const isTrue = e.target.value === question.options[question.answer];
        if (isTrue) {
            if ((points + 1) == Object.keys(questions).length) {
                console.log("you won!");
                setPoints(points + 1);
                console.log("nav to another page");
                handleNavigate();

            } else {
                setPoints(points + 1);
                handleNextQClick();

            }
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
    }
    const handleNextQClick = () => {
        if (questionNum === Object.keys(questions).length) {
            setQuestionNum(1);
        } else {
            setQuestionNum(questionNum + 1);
        }

    }
    return (
        <div className="container">
            <h3>Question {questionNum}</h3>
            <h2 className="question-text">{question.text}</h2>
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