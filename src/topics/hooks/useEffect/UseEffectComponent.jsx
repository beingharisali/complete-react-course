import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function UseEffectComponent() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect logic rendered here");
    document.title = `New Title : ${value}`;
  }, []);
  console.log("Component rendered here");
  return (
    <div className="w-1/2 mx-auto text-center">
      <h1 className="text-3xl font-semibold text-center my-4">
        useEffect Component
      </h1>
      <h2 className="text-xl">{value}</h2>
      <Button variant="success" onClick={() => setValue(value + 1)}>
        Click
      </Button>
    </div>
  );
}

export default UseEffectComponent;
