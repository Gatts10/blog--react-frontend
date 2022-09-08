import { Link } from "react-router-dom";
import "./post.css";
import IMG from "../../assets/postImg.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={IMG} alt="postImg" />
      <div className="postInfo">
        <div>
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to="/post/1" className="link">
            Quis sunt id minim quis duis
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Veniam ad esse occaecat ipsum quis nisi sit sint esse duis pariatur
        nulla. Nostrud amet mollit non elit do do mollit esse. Exercitation
        excepteur nisi do aliquip non. Nulla sint proident ea aliqua laboris in
        duis enim qui. Elit labore amet adipisicing officia veniam fugiat quis
        ex voluptate deserunt reprehenderit dolor non mollit. Esse minim mollit
        amet ipsum do veniam veniam laborum.
      </p>
    </div>
  );
}
