import React, { useState } from 'react';
import { useForm }  from "../hooks/useForm";



export default function SignUpForm() {
  
  // Stateful Logic:
  // state variables username and setUsername
  // handleChanges function
  // clearForm function

  // Abstract all those stateful logic pieces
  // remove them from the component
  // add them to the custom hook
  // return the necessary pieces from the hook
  // call the custom hook in your component to get
  // those pieces back
  const callApiForTheSubmit = () => {
    // call some api, or do something
  };
  const [values, handleChanges, clearForm] = useForm(
    'signupForm',
    {
      username: '',
      email: ''
    },
    callApiForTheSubmit
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Sign-Up For Our Soccer News Letter!</legend>
          <input
            id="outlined-name"
            label="Username"
            
            value={values.username}
            name="username"
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <input
            id="outlined-name"
            label="email"
            
            value={values.email}
            name="email"
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <button color="blue" type="submit">
            Submit
          </button>
          <button color="red" onClick={clearForm}>
            Clear
          </button>
        </fieldset>
      </form>
    </div>
  );
}