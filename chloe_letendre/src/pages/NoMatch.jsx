// Reaca Router Dom
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
      <div className='content'>
        <h1>Nothing to see here!</h1>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }