import React from "react";

const Option = (props) => {

  return (
    <div>
      <p id={props.index}>
        {props.index+1}. {props.option}
      </p>
      <button onClick={(e) => {props.removeSelected(e, props.index)}} >Remove</button>
    </div>
  )
}

export default Option;
