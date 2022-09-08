import "./singlePost.css";
import IMG from "../../assets/postImg.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={IMG} alt="postImg" />
        <h1 className="singlePostTitle">Quis sunt id minim quis duis</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Admin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Veniam ad esse occaecat ipsum quis nisi sit sint esse duis pariatur
          nulla. Nostrud amet mollit non elit do do mollit esse. Exercitation
          excepteur nisi do aliquip non. Nulla sint proident ea aliqua laboris
          in duis enim qui. Elit labore amet adipisicing officia veniam fugiat
          quis ex voluptate deserunt reprehenderit dolor non mollit. Esse minim
          mollit amet ipsum do veniam veniam laborum. Veniam ad esse occaecat
          ipsum quis nisi sit sint esse duis pariatur nulla. Nostrud amet mollit
          non elit do do mollit esse. Exercitation excepteur nisi do aliquip
          non. Nulla sint proident ea aliqua laboris in duis enim qui. Elit
          labore amet adipisicing officia veniam fugiat quis ex voluptate
          deserunt reprehenderit dolor non mollit. Esse minim mollit amet ipsum
          do veniam veniam laborum. Veniam ad esse occaecat ipsum quis nisi sit
          sint esse duis pariatur nulla. Nostrud amet mollit non elit do do
          mollit esse. Exercitation excepteur nisi do aliquip non. Nulla sint
          proident ea aliqua laboris in duis enim qui. Elit labore amet
          adipisicing officia veniam fugiat quis ex voluptate deserunt
          reprehenderit dolor non mollit. Esse minim mollit amet ipsum do veniam
          veniam laborum. Veniam ad esse occaecat ipsum quis nisi sit sint esse
          duis pariatur nulla. Nostrud amet mollit non elit do do mollit esse.
          Exercitation excepteur nisi do aliquip non. Nulla sint proident ea
          aliqua laboris in duis enim qui. Elit labore amet adipisicing officia
          veniam fugiat quis ex voluptate deserunt reprehenderit dolor non
          mollit. Esse minim mollit amet ipsum do veniam veniam laborum. Veniam
          ad esse occaecat ipsum quis nisi sit sint esse duis pariatur nulla.
          Nostrud amet mollit non elit do do mollit esse. Exercitation excepteur
          nisi do aliquip non. Nulla sint proident ea aliqua laboris in duis
          enim qui. Elit labore amet adipisicing officia veniam fugiat quis ex
          voluptate deserunt reprehenderit dolor non mollit. Esse minim mollit
          amet ipsum do veniam veniam laborum.
        </p>
      </div>
    </div>
  );
}