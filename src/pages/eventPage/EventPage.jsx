import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Header from "../../components/header/Header";
import Events from "../../components/events/Events";
import Sidebar from "../../components/sidebar/Sidebar";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const abortCont = new AbortController();

    axios
      .get(`${import.meta.env.VITE_API}/events?page=${pageNumber}`, {
        signal: abortCont.signal,
      })
      .then((res) => {
        // console.log(res.data);
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });

    return () => abortCont.abort();
  }, [pageNumber]);

  const eventsPerPage = events.meta?.per_page;
  const pageCount = Math.ceil(events.meta?.total / eventsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {loading ? (
            <div className="posts">
              <div className="spinner-border loading" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="col-sm-12 col-md-8 mx-auto">
              <Events events={events} />
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName={"active"}
                renderOnZeroPageCount={null}
              />
            </div>
          )}
          <Sidebar className="col-4 mx-auto" />
        </div>
      </div>
    </>
  );
}