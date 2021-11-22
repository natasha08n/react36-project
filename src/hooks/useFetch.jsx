import { useState, useEffect } from "react";

import { getTeacher } from "../api/teachers";

function useFetch(id) {
  const [item, setItem] = useState({});

  useEffect(() => {
    getTeacher(id).then((res) => {
      setItem(res);
    });
  });

  return item;
}

export { useFetch };
