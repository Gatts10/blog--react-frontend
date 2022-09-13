import { Link } from "react-router-dom";
import "./event.css";

export default function HomeEvent({ event }) {
  return (
    <div className="event">
      <img className="eventImg" src={event.image} alt="eventImg" />
      <div className="eventInfo">
        <span className="eventCat">{event.date}</span>
        <span className="eventTitle">
          <Link to={`/events/${event.id}`} className="link">
            {event.name}
          </Link>
        </span>
        <hr />
        <span className="eventDate">{event.published_at}</span>
      </div>
    </div>
  );
}
