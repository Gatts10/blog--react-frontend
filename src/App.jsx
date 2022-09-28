import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import EventPage from "./pages/eventPage/EventPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import SingleEventPage from "./pages/singleEventPage/SingleEventPage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/events/:id" element={<SingleEventPage />} />
      </Routes>
      <ScrollToTop smooth className="scroll" />
    </>
  );
}

export default App;