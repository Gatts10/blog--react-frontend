import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/posts/` + id);
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  const content = `${post.content}`;

  return (
    <div className="singlePost">
      {loading ? (
        <div className="spinner-border loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="singlePostWrapper">
          <img className="singlePostImg" src={post.thumbnail} alt="postImg" />
          <h1 className="singlePostTitle">{post.title}</h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Admin</b>
            </span>
            <span className="singlePostDate">{post.created_at}</span>
          </div>
          <div className="singlePostDesc">{parse(content)}</div>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Category:{" "}
              <Link to={`/?category=${post.category_id}`} className="link">
                <b className="singlePostCatsTags">{post.category.name}</b>
              </Link>
            </span>
            <span className="singlePostTags">
              Tags:{" "}
              {post.tags.map((tag) => (
                <b className="singlePostCatsTags" key={tag.id}>
                  {tag.name}
                </b>
              ))}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}