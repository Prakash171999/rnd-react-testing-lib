import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-test" >{title}</h1>
      <h1 title="header" className="header">
        Cats
      </h1>
    </>
  );
}
