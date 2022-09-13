import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./post.css";

export default function Post({ post }) {
  const content = `${post.content}`;

  return (
    <div className="post">
      <img className="postImg" src={post.thumbnail} alt="postImg" />
      <div className="postInfo">
        <span className="postCat">
          <Link to={`/?category=${post.category_id}`} className="link">
            {post.category.name}
          </Link>
        </span>
        <span className="postTitle">
          <Link to={`/posts/${post.id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.published_at}</span>
      </div>
      <div className="postDesc">{parse(content)}</div>
    </div>
  );
}
