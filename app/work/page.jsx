"use client";

import s from "./work.module.css";
import Cards from "@/components/Cards";

// import { Card } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

const Work = () => {
  return (
    <main className={s.section}>
      {/* <Container className="mx-auto">
        <Row xs={1} md={2} className="g-4"></Row>
      </Container> */}
      <Cards />
    </main>
  );
};

export default Work;
