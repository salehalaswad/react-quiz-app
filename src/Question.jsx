import React, { useState } from 'react';

const Question = ({ question, setPoints, points }) => {

    const [options, setOptions] = useState(question.options);
    const handleOptionClick = (e) => {
        const isTrue = e.target.value === question.options[question.answer];
        if (isTrue)
            setPoints(points + 1);
        else if (points > 0)
            setPoints(points - 1);
    }
    const handleR2OClick = (e) => {

        const falseOptionen = Object.keys(options).
            filter((key) => key !== question.answer).
            reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {});

        const randomFalsch = Object.keys(falseOptionen)
        [Math.floor(Math.random() * Object.keys(falseOptionen).length)];

        const verbleibend = {
            ...Object.keys(options).filter((key) => key == question.answer)
                .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {}),
            ...Object.keys(options).filter((key) => key == randomFalsch)
                .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {})
        }
        setOptions(verbleibend);

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
                    <button  >next Question</button>
                </div>
            </div>
        </div>
    )
}

export default Question;