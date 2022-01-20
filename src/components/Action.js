import React from 'react';

const Action = (props) => {
  const checkDisabled = !props.options.length;
  return (
    <div>
      <button onClick={props.chooseOne} disabled={checkDisabled}>Lets Choose</button>
      <div>
        <h3>Total Options <i><u>{props.options.length}</u></i></h3>
        <button onClick={props.removeAll} disabled={checkDisabled}>Remove All</button>
      </div>
    </div>
  )
}

export default Action;
