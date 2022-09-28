import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    axios
      .get(`${import.meta.env.VITE_API}/posts/` + id, {
        signal: abortCont.signal,
      })
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });

    return () => abortCont.abort();
  }, [id, send]);

  const content = `${post.content}`;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_API}/comments`, data)
      .then((res) => {
        console.log(res.data);
        setSend(true);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    {moment(comment.created_at).format("DD-MMM-YYYY HH:mm")}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    {...register("name", {
                      required: "This name field is required.",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    as="p"
                    className="error"
                  />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", {
                      required: "This email field is required.",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "This email address is not valid.",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    as="p"
                    className="error"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <textarea
                    type="textarea"
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    {...register("body", {
                      required: "This message field is required.",
                      minLength: {
                        value: 3,
                        message:
                          "This message must have at least 5 characters.",
                      },
                      maxLength: {
                        value: 500,
                        message:
                          "This message cannot have more than 500 characters.",
                      },
                    })}
                  ></textarea>
                  <ErrorMessage
                    errors={errors}
                    name="body"
                    as="p"
                    className="error"
                  />
                </div>
                <input type="hidden" value={post.id} {...register("post_id")} />
              </div>
              <button
                type="submit"
                className="btn btn-dark singlePostCommentBtn"
              >
                Send
              </button>
            </form>
          </div>
          {alert && (
            <div
              className="alert alert-success singlePostCommentAlert"
              role="alert"
            >
              This message was successfully sent!
            </div>
          )}
        </div>
      )}
    </>
  );
}