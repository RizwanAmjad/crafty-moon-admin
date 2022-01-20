import React from "react";

import "./styles/category-list.css";

function ListCategoriesComponent({ categories }) {
  return (
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
              <button className="form-input">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListCategoriesComponent;
