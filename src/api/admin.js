import apiClient from "./client";

const endpoint = "admins/login";

const loginAdmin = (admin) => {
  return apiClient.post(endpoint, admin);
};

export default {
  loginAdmin,
};
