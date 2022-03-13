import React, { useState, useEffect } from "react";

import AddCategoriesComponent from "./AddCategoriesComponent";
import ListCategoriesComponent from "./ListCategoriesComponent";

import categoriesApi from "../api/categories";
import useApi from "../hooks/useApi";

import "./styles/categories.css";

function HomeComponent(props) {
  const { loading, request: getCategoriesRequest } = useApi(
    categoriesApi.getAllCategories
  );
  const [categories, setCategories] = useState([]);

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  useEffect(() => {
    (async () => {
      const { data, error } = await getCategoriesRequest();
      if (!error) return setCategories(data);
    })();
  }, []);

  return (
    <div className="category-container">
      <AddCategoriesComponent addCategoryToList={handleAdd} />
      <ListCategoriesComponent categories={categories} loading={loading} />
    </div>
  );
}

export default HomeComponent;
