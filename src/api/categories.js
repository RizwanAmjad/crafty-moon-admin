import apiClient from "./client";

const getAllCategories = () => {
  return apiClient.get("categories");
};

const exports = { getAllCategories };

export default exports;
