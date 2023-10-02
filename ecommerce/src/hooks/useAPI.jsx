import { useEffect, useState } from "react";

export const useAPI = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async (endpoint) => {
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        if (res.status !== 200) throw new Error("Error APi response");

        const data = await res.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(endpoint);
  }, [endpoint]);

  return {data, loading, error};
};
