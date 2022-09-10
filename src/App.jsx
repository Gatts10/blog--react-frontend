import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
