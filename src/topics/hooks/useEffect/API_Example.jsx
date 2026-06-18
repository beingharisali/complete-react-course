import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const url = "https://www.course-api.com/react-tours-project";
function API_Example() {
  const [tours, setTours] = useState([]);
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
          return <CardComponent key={mereTours.id} {...mereTours} />;
        })}
      </div>
    </div>
  );
}

export default API_Example;
