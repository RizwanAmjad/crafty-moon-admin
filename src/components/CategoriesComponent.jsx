import React, { useState, useEffect } from "react";

import AddCategoriesComponent from "./AddCategoriesComponent";
import ListCategoriesComponent from "./ListCategoriesComponent";

import categoriesApi from "../api/categories";

import "./styles/categories.css";

function HomeComponent(props) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadPaintings = async () => {
    setLoading(true);
    const { data, problem } = await categoriesApi.getAllCategories();
    setLoading(false);
    if (!problem) setCategories(data);
  };

  useEffect(() => {
    loadPaintings();
  }, []);

  return (
    <div className="category-container">
      <AddCategoriesComponent />
      <ListCategoriesComponent categories={categories} loading={loading} />
    </div>
  );
}

export default HomeComponent;
