import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    {props.options.length > 0 ? (
      <div>
        <h3>Available Options</h3>
        {props.options.map((opt, i) => {
          return (
            <Option
              option={opt}
              key={i}
              index={i}
              removeSelected={props.removeSelected}
            ></Option>
          );
        })}
      </div>
    ) : (
      <h3>Add options</h3>
    )}
  </div>
);

export default Options;
