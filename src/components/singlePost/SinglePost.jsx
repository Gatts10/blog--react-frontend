import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/posts/` + id);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  const content = `${post.content}`

  return (
    <div className="singlePost">
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
      </div>
    </div>
  );
}
