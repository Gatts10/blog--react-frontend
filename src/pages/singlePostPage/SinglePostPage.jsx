import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singlePostPage.css";

export default function SinglePostPage() {
  return (
    <div className="singlePostPage">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
