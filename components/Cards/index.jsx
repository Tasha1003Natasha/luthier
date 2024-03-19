import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// import test from "@/public/images/test.png";
import { getCustomCards } from "@/service/cards";

const Cards = () => {
  const [custom, setCustom] = useState([]);
  console.log("custom:", custom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCustomCards = await getCustomCards();

        setCustom(dataCustomCards.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // <Container
    //   className="px-4"
    //   style={{ paddingTop: "3%", maxHeight: "14rem" }}
    // >
    //   <Row>
    //     {custom.map((item) => (
    //       <Col key={item?.id} md={4} style={{ marginBottom: "20px" }}>
    //         <Card className="cards" style={{ width: "18rem" }}>
    //           <div style={{ height: "120px", textAlign: "center" }}>
    //             <Image
    //               src={item?.webContentLink}
    //               alt={item?.etag}
    //               priority={true}
    //               width={300}
    //               height={200}
    //               objectFit="cover"
    //             />
    //           </div>
    //           <Card.Body>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    <Container fluid className="px-4" style={{ paddingTop: "3%" }}>
      <Row noGutters={true}>
        {/* <Row xs={1} md={2} className="g-4" }> */}
        {custom.map((item, id) => (
          <Col key={id} xs={12} md={4} lg={3} sm={6}>
            <Card>
              <Image
                src={item?.webContentLink}
                alt={item?.etag}
                priority={true}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "30vw",
                  height: "35vh",
                  objectFit: "cover",
                }}
              />

              <Card.Body>
                {/* <Card.Title>{playerData.name}</Card.Title>
                                <Card.Text>{playerData.team_name}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
