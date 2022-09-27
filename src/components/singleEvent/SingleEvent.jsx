import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./singleEvent.css";

export default function SingleEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/events/` + id);
      setEvent(res.data);
      setLoading(false);
    };
    fetchEvent();
  }, [id]);

  const handleOpen = (index) => {
    setOpen(true);
    setSlideNumber(index);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber =
        slideNumber === 0 ? event.images.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === event.images.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="singleEventWrapper">
          {open && (
            <div className="singleEventSlider">
              <i
                className="fa-solid fa-circle-xmark singleEventIconClose"
                onClick={() => setOpen(false)}
              ></i>
              <i
                className="fa-solid fa-circle-arrow-left singleEventIconArrow"
                onClick={() => handleMove("l")}
              ></i>
              <div className="singleEventSliderWrapper">
                <img
                  src={event.images[slideNumber]}
                  alt={`postImg-${slideNumber}`}
                  className="singleEventSliderImg"
                />
              </div>
              <i
                className="fa-solid fa-circle-arrow-right singleEventIconArrow"
                onClick={() => handleMove("r")}
              ></i>
            </div>
          )}
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
              <div
                key={index}
                className="singleEventArrayImgs col-sm-12 col-xl-4"
              >
                <img
                  className="singleEventArrayImg"
                  src={item}
                  alt={`postImg-${index}`}
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}