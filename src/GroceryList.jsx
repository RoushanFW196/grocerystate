import "./App.css";
import React from "react";

const GroceryList = (props) => {
  return (
    <>
      <div className="grossrow">
        <div>
          <li>{props.text}</li>
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default GroceryList;
