import { create } from "apisauce";

import backend from "../config/backend";

const tokenKey = "x-auth-token";
const authToken = "authToken";

const apiClient = create({
  baseURL: backend.serverLocation,
});

apiClient.addRequestTransform((request) => {
  const token = localStorage.getItem(authToken);
  if (token) request.headers[tokenKey] = token;
});

export default apiClient;
