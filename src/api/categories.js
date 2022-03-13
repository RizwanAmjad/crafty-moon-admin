import apiClient from "./client";

const endpoint = "categories";

const getAllCategories = () => {
  return apiClient.get(endpoint);
};

const addCategory = (category) => {
  return apiClient.post(endpoint, category);
};

const deleteCategory = (id) => {
  return apiClient.delete(`${endpoint}/${id}`);
};

const exports = { addCategory, getAllCategories, deleteCategory };

export default exports;
