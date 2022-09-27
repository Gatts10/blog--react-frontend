import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  //props from link categories
  const { state } = useLocation();
  const { search } = state;
  //
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API
        }/posts?page=${pageNumber}&category=${search}`
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [pageNumber, search]);

  const postsPerPage = posts.meta?.per_page;
  const pageCount = Math.ceil(posts.meta?.total / postsPerPage);

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
          <Sidebar className="col-4 mx-auto" />
        </div>
      </div>
    </>
  );
}