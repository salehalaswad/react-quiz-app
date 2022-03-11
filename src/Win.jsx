import { Link } from "react-router-dom";
import './Win.css';

const Win = () => {
    return (
        <div className="win">
            <h2>You wone! :)</h2>
            <Link to="/">
                <button >back to questions</button>
            </Link>
        </div>
    )
}

export default Win;