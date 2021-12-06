import { useState, useEffect } from "react";

import { getTeacher } from "../api/teachers";

function useFetch(id) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTeacher(id)
      .then((res) => {
        setItem(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); 

  return { item, loading };
}

export { useFetch };
