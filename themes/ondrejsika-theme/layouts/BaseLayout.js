import React from "react";

export default function BaseLayout(props) {
  return (
    <>
      <body style={{ background: "grey" }}>{props.children}</body>
    </>
  );
}
