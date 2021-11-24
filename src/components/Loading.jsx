import { useContext } from "react";

import Loader from "react-loader-spinner";

import { ThemeContext } from "../App";

function Loading({ color }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader
        type="Hearts"
        color={color || theme.color}
        height={100}
        width={100}
        timeout={3000} // 3 secs
      />
    </div>
  );
}

export { Loading };
