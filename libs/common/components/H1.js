import React from "react";

export default function H1(props) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.children}</h1>
    </>
  );
}
