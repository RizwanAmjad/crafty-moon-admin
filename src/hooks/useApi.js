import { useState } from "react";

const useApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);

  const request = async (...params) => {
    setLoading(true);
    const { data, problem } = await apiFunction(...params);
    setLoading(false);

    return {
      data,
      error: problem,
    };
  };
  return {
    loading,
    request,
  };
};

export default useApi;
