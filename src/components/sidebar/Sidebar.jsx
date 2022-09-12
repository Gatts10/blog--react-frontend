import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sidebar.css";
import IMG from "../../assets/aboutImg.jpg";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/categories`);
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={IMG} alt="aboutImg" />
        <p>
          Sunt eu laborum aute non mollit proident fugiat minim ad. Dolor tempor
          labore ut sit. Laborum dolor irure consectetur proident incididunt in
          commodo est id minim. Excepteur duis et anim sit ipsum exercitation
          exercitation aliquip est. Veniam cupidatat laborum esse nisi fugiat
          cillum ex qui velit pariatur ad commodo duis cupidatat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => (
            <Link
              to={`/?category=${category.id}`}
              key={category.id}
              className="link"
            >
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}