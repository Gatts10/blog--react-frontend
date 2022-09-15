import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Events from "../../components/events/Events";
import Sidebar from "../../components/sidebar/Sidebar";
import "./eventPage.css";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/events`);
      setEvents(res.data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <div className="eventPage">
        {loading ? (
          <div className="events">
            <div className="spinner-border loading" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <Events events={events} />
        )}
        <Sidebar />
      </div>
    </>
  );
}
