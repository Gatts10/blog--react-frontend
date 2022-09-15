import Event from "../event/Event";
import "./events.css";

export default function Events({ events }) {
  return (
    <>
      <div className="events">
        {events.data.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
