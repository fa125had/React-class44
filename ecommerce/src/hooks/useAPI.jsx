import { useEffect, useState } from "react";

export const useAPI = (endpoint, favorites) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async (endpoint, favorite) => {
    try {
      if (favorite) {
        setLoading(true);
        const fetchPromises = favorites.map((id) =>
          fetch(`${endpoint}${id}`).then((res) => res.json())
        );
        const fetchedProducts = await Promise.all(fetchPromises);
        setData(fetchedProducts);
      } else {
        setLoading(true);
        const res = await fetch(endpoint);
        if (res.status !== 200) throw new Error("Error APi response");

        const data = await res.json();

        setData(data);
      }
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(endpoint, favorites);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, favorites]);

  return { data, loading, error };
};
