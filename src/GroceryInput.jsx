import React from "react";
import { useState } from "react";

import GroceryList from "./GroceryList";

const Groceryinput = () => {
  const [inputitem, setInputitem] = useState("");

  const [grocery, setGrocery] = useState([]);
  const inputevent = (event) => {
    setInputitem(event.target.value);
  };

  const additem = () => {
    setGrocery((oldgrocery) => {
      return [...oldgrocery, inputitem];
    });
    setInputitem("");
  };

  const deletegrocery = (id) => {
    console.log("deletegrocery ho gya");

    setGrocery((oldgrocery) => {
      return oldgrocery.filter((arrelem, index) => {
        return index != id;
      });
    });
  };

  return (
    <>
      

      <input
        type="text"
        placeholder="enter grocery name"
        onChange={inputevent}
        value={inputitem}
      />
      <button onClick={additem}>add Grocery</button>

      <tr>
        {grocery.map((task, index) => {
          return (
            <GroceryList
              id={index}
              key={index}
              text={task}
              onSelect={deletegrocery}
            />
          );
        })}
      </tr>
    </>
  );
};

export default Groceryinput;
