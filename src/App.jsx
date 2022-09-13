import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import EventPage from "./pages/eventPage/EventPage";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Routes>
    </>
  );
}

export default App;
