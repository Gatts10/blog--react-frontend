import SingleEvent from "../../components/singleEvent/SingleEvent";
import Sidebar from "../../components/sidebar/Sidebar";

export default function SinglePostPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-8 mx-auto">
          <SingleEvent />
        </div>
        <Sidebar className="col-4 mx-auto" />
      </div>
    </div>
  );
}