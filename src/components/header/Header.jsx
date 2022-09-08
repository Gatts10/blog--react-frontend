import "./header.css";
import IMG from "../../assets/headerImg.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Laravel</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={IMG} alt="headerImg" />
    </div>
  );
}
