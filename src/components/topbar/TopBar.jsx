import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">Home</li>
          <li className="topListItem">Home</li>
          <li className="topListItem">Home</li>
        </ul>
      </div>
    </div>
  );
}
