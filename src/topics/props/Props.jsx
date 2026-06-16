import React from "react";
import { data } from "./data";

function Props() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">App Component</h1>
      <div className="flex gap-4 flex-wrap">
        {data.map((mereCards) => {
          return (
            <Card
              // cardImage={mereCards.cardImage}
              // cardTitle={mereCards.cardTitle}
              // cardDescrpition={mereCards.cardDescription}
              {...mereCards}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Props;

function Card(props) {
  console.log(props);
  return (
    <div className="w-75 flex flex-col gap-2 p-4 shadow-2xl">
      <img src={props.cardImage} alt="" />
      <h1 className="text-2xl font-semibold">{props.cardTitle}</h1>
      <p>{props.cardDescription}</p>
      <button className="bg-indigo-600 text-white py-1 px-2 cursor-pointer">
        Read more
      </button>
    </div>
  );
}
