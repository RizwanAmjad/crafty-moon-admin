import apiClient from "./client";

const endpoint = "categories";

const getAllCategories = () => {
  return apiClient.get(endpoint);
};

const addCategory = (category) => {
  return apiClient.post(endpoint, category);
};

const exports = { addCategory, getAllCategories };

export default exports;
