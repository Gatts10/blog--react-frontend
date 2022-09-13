import Event from "../event/Event";
import "./events.css";

export default function Events({ events, loading }) {
  return (
    <>
      {loading ? (
        <div className="events">
          <div className="spinner-border loading" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="events">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      )}
    </>
  );
}
