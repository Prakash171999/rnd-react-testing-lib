import React from "react";
import { Container } from "react-bootstrap";
import Todo from "../../components/Todo/Todo";

export default function TodoPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Todo />
      </Container>
    </div>
  );
}
