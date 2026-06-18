import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function CardComponent({ id, name, info, image, price }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {readMore ? info : info.substring(0, 200)}
          <button className="underline" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read more"}
          </button>
        </Card.Text>
        <Button variant="primary">${price}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
