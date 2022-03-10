import React, { useState } from "react";
import Question from "./Question";


const Home = ({ questions}) => {
    const [points, setPoints] = useState(0);
    return (
        /*   */

        <div className="home">
            <div className="points-counter">
                <h2>POINTS: {points}</h2>
            </div>
            <Question questions={questions} points={points} setPoints={setPoints} />
        </div>

    )
}


export default Home;