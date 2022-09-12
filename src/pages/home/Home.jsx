import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  const [categoryId, setCategoryId] = useState("");

  const handleCategoryId = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API}/posts?category=` + categoryId
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [categoryId]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar handleCategoryId={handleCategoryId} />
      </div>
    </>
  );
}
