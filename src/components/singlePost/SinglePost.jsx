import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";
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
    <>
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
              Author: <b>{post.author.name}</b>
            </span>
            <span className="singlePostDate">{post.published_at}</span>
          </div>
          <div className="singlePostDesc">{parse(content)}</div>
          {post.event_id && (
            <div className="singlePostEvent">
              <span>
                Event Related <br />
                <Link to={`/events/${post.event_id}`} className="link">
                  <button
                    type="button"
                    className="btn btn-dark singlePostEventBtn"
                  >
                    {post.event.name}
                  </button>
                </Link>
              </span>
            </div>
          )}
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
          <div className="singlePostCommentWrapper">
            <h3 className="singlePostCommentCount">
              Comments ({post.comments.length})
            </h3>
            {post.comments.map((comment) => (
              <div key={comment.id} className="singlePostComment">
                <div className="singlePostCommentInfo">
                  <cite className="singlePostCommentName">{comment.name}</cite>
                  <time>
                    {moment.utc(comment.created_at).format("DD-MMM-YYYY HH:mm")}
                  </time>
                </div>
                <div className="singlePostCommentBody">
                  <p>{comment.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="singlePostCommentNewWrapper">
            <h3 className="singlePostCommentNew">Add a New Comment</h3>
            <form>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <textarea
                    type="textarea"
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark singlePostCommentBtn"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}