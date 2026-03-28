// src/components/Category.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
  {
    name: "Men",
    image: new URL("../assets/images/man/man/Ethnic wear/Ethnic 1/1.0.jpg", import.meta.url).href,
    path: "/men",
  },
  {
    name: "Women",
    image: new URL("../assets/images/women/women/Ethnic/1.0/ethnic1.0.jpg", import.meta.url).href,
    path: "/women",
  },
  {
    name: "Kids",
    image: new URL("../assets/images/kid/kid/boys'clothing/ethnic wear/1/1.1.jpeg", import.meta.url).href,
    path: "/kids",
  },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <>
    <h1 className="Title">Shop by Category</h1>
    <div className="category-container">
     
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="category-card"
          onClick={() => handleCategoryClick(cat.path)}
        >
          <img src={cat.image} alt={cat.name} />
          <h3>{cat.name}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default Category;