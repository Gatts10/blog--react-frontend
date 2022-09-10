import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/posts/` + id);
      setPost(res.data);
      console.log(res.data);
    };
    fetchPost();
  }, [id]);

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
        <p className="singlePostDesc">{post.content}</p>
      </div>
    </div>
  );
}