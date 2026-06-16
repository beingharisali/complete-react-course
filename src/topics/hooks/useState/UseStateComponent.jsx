import React, { useState } from "react";

// 1- preserve a value
// 2- can re-render that initial value

// functional based component
function UseStateComponent() {
  //   const [text, setText] = useState("Admin");
  const [value, setValue] = useState(0);
  //   function updateRole() {
  //     if (text === "Admin") {
  //       setText("Client");
  //     } else {
  //       setText("Admin");
  //     }
  //   }
  function incrementValue() {
    setValue(value + 1);
  }
  function decrementValue() {
    if (value === 0) {
      setValue(0);
      alert("You've reached the minimum limit");
    } else {
      setValue(value - 1);
    }
  }
  function resetValue() {
    setValue(0);
  }
  return (
    <div className="w-1/2 mx-auto text-center">
      <h1 className="text-center text-2xl font-semibold">useState Component</h1>
      {/* <h1>{text}</h1>
      <button onClick={updateRole}>Click</button> */}
      <h1 className="text-3xl font-semibold my-4">{value}</h1>
      <button
        onClick={incrementValue}
        className="bg-green-600 text-white mx-2 py-1 px-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={resetValue}
        className="bg-red-600 text-white mx-2 py-1 px-2 rounded-lg cursor-pointer"
      >
        Reset
      </button>
      <button
        onClick={decrementValue}
        className="bg-yellow-600 text-white mx-2 py-1 px-2 rounded-lg cursor-pointer"
      >
        Decrement
      </button>
    </div>
  );
}

export default UseStateComponent;

// class based components
// import React, { Component } from 'react'

// export default class UseStateComponent extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// Component life cycle

// Mounting of a component - birth of a component
// re-rendering of component - update of component
// unmounting of component - destruction of component

// Component will mount
// component did mount

// Hooks
