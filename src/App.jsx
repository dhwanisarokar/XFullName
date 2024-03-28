import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${name.firstName} ${name.lastName}`);
  };
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={name.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <br />
        <label htmlFor="lastName">First Name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={name.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName.length ? <p>Full Name: {fullName}</p> : ""}
    </>
  );
}

export default App;
