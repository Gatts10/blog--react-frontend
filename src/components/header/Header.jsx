import "./header.css";
import IMG from "../../assets/headerImg.jpg";

export default function Header() {
  return (
    <>
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg img-fluid" src={IMG} alt="headerImg" />
    </>
  );
}
