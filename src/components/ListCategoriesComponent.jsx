import React from "react";

import LoadingComponent from "./LoadingComponent";

import useApi from "../hooks/useApi";
import categoriesApi from "../api/categories";

import "./styles/category-list.css";

function ListCategoriesComponent({
  categories,
  loading,
  removeCategoryFromList,
}) {
  const { loading: requestLoading, request: deleteCategoryRequest } = useApi(
    categoriesApi.deleteCategory
  );
  const handleDelete = async (id) => {
    const { error } = await deleteCategoryRequest(id);
    if (!error) removeCategoryFromList(id);
  };

  if (loading) {
    return <LoadingComponent message="Loading..." />;
  }

  if (requestLoading) {
    return <LoadingComponent message="Deleting..." />;
  }

  return (
    categories.length != 0 && (
      <table className="category-table">
        <thead>
          <tr>
            <th>Category Title</th>
            <th>Paintings Count</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.title}</td>
              <td>{category.paintingsCount}</td>
              <td>
                <button className="form-input">Update</button>
              </td>
              <td>
                <button
                  className="form-input"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}

export default ListCategoriesComponent;
