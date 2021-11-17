import { useEffect, useState, useCallback, memo } from "react";
import { BASE_URL } from "../api/constants";

export const Example = memo(() => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  // 👍🏾 The reference of `hideMessage()` will only change if/when
  // the value of `count` changes
  const hideMessage = useCallback(() => {
    setShowMessage(count < 10 ? false : true);
  }, [count]);

  useEffect(() => {
    console.log("useEffect");
    window
      .fetch(`${BASE_URL}/teachers`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.success");
        hideMessage();
      });
  }, [hideMessage]);

  console.log("RENDERED", count, showMessage);

  return (
    <div>
      {showMessage && <p>You clicked {count} times</p>}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
});
