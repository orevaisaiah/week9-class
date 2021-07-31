import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    firstName: "",
    email: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.firstName && input.email){
        alert("Form submited")
    }
    else {
        alert('Please enter your firstname and email')
    }

  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="firstName"
          placeholder="FirstName"
        />
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="Email"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
