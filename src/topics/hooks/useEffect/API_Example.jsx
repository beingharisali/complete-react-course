import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const url = "https://www.course-api.com/react-tours-project";
function API_Example() {
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);
  async function fetchTours() {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setTours(data);
  }
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div>
      <h1 className="text-center">Tours</h1>
      <div className="flex flex-wrap gap-10 mx-4">
        {tours.map((mereTours) => {
          return (
            <Card style={{ width: "18rem" }} key={mereTours.id}>
              <Card.Img variant="top" src={mereTours.image} />
              <Card.Body>
                <Card.Title>{mereTours.name}</Card.Title>
                <Card.Text>
                  {readMore ? mereTours.info : mereTours.info.substring(0, 200)}
                  <button
                    className="underline"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "Show Less" : "Read more"}
                  </button>
                </Card.Text>
                <Button variant="primary">${mereTours.price}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default API_Example;
