import React, { useState } from 'react';

const Form = (props) => {
  const [error, setError] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    const error = props.handleSaveOption(option)
    if(!error) {
      e.target.elements.option.value=''
    }
    setError(error);
  }
  
  return (
    <form onSubmit={handleSave}>
        <input
         name='option'
         placeholder='enter any options'
        />
        <button>Save</button>
        {error && <p>error</p>}
    </form>
  )
}

export default Form;