import React from "react";

import AddCategoriesComponent from "./AddCategoriesComponent";
import ListCategoriesComponent from "./ListCategoriesComponent";

import "./styles/categories.css";

function HomeComponent(props) {
  const categories = [
    {
      _id: "619e0bee49347afdf8505543",
      title: "Canvas",
      paintingsCount: 0,
    },
    {
      _id: "619e0bf749347afdf8505545",
      title: "Oil Paintings",
      paintingsCount: 0,
    },
  ];

  return (
    <div className="row">
      <AddCategoriesComponent />
      <ListCategoriesComponent categories={categories} />
    </div>
  );
}

export default HomeComponent;
