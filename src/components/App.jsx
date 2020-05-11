import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  return (
    <div className="container">
      <h1>Hello {fullName.fName + " " + fullName.lName}</h1>
      <form>
        <input
          onChange={event => {
            setFullName({ fName: event.target.value, lName: fullName.lName });
          }}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} // <-- controlled component
        />
        <input
          onChange={event => {
            setFullName({ fName: fullName.fName, lName: event.target.value });
          }}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName} // <-- controlled component
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
