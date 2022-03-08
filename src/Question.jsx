import React, { useState } from 'react';

const Question = ({ question }) => {

    const [options, setOptions] = useState(question.options);
    const handleOptionClick = (e) => {
        const isTrue = e.target.value === question.options[question.answer];
        console.log(isTrue ? "true" : "false");
    }
    const handleFiftyClick = (e) => {
        /*
        Object.entries(options).forEach(
            ([key, value]) =>
            {
                var random =  Object.entries(options)
                [Math.floor(Math.random()* Object.entries(options).length)]; 
                console.log("random: "+random);
                // if ( question.answer != key) {
                //     delete options[key];
                //     k=key;
                // }
            }
        )
        //  delete options[1];
          //    setOptions({ ...question.options, ...question.options[k]});
          */
        const falseOptionen = Object.keys(options).
            filter((key) => key !== question.answer).
            reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {});

        const randomFalsch = Object.keys(falseOptionen)
        [Math.floor(Math.random() * Object.keys(falseOptionen).length)];

        const verbleibend = {
            ...Object.keys(options).filter((key) => key == question.answer)
            .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {}),
            ...Object.keys(options).filter((key)=> key == randomFalsch)
            .reduce((cur, key) => { return Object.assign(cur, { [key]: options[key] }) }, {})
        }
        console.log(verbleibend);
        console.log(randomFalsch);
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
                    <button onClick={handleFiftyClick} >50:50</button>
                    <button>next Question</button>
                </div>
            </div>
        </div>
    )
}

export default Question;