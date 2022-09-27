import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./singleEvent.css";

export default function SingleEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/events/` + id);
      setEvent(res.data);
      setLoading(false);
    };
    fetchEvent();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="spinner-border loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="singleEventWrapper">
          <div className="singleEventCentered">
            <img
              className="singleEventImg singleEventOpacity"
              src={event.thumbnail}
              alt="postImg"
            />
            <h1 className="singleEventTitle">{event.name}</h1>
            <h3 className="singleEventDate">{event.date}</h3>
          </div>
          <div className="singleEventArray">
            {event.images.map((item, index) => (
              <div key={index} className="singleEventArrayImgs col-sm-12 col-xl-4">
                <img
                  className="singleEventArrayImg"
                  src={item}
                  alt={`postImg-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}