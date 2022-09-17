import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API
        }/posts?page=${pageNumber}`
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [pageNumber]);

  const postsPerPage = posts.meta?.per_page;
  const pageCount = Math.ceil(posts.meta?.total / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  return (
    <>
      <Header />
      <div className="home">
        {loading ? (
          <div className="posts">
            <div className="spinner-border loading" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <Posts posts={posts} />
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
        <Sidebar />
      </div>
    </>
  );
}