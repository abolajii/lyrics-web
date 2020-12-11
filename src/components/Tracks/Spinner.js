import React from "react";
import spinner from "../layouts/spinner.gif";

export const Spinner = () => {
  return (
    <div>
      <img
        style={{ width: "200px", margin: " 40px auto", display: "block" }}
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};
