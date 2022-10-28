import { useState } from "react";
import "./ProgrammingExpertise.css";
import "../index.css";

const initialState = {
  Title: "",
  SubTitle: "",
  City: "",
  Country: "",
  StartDate: "",
  EndDate: "",
  Description: "",
};

const ProgrammingExpertise = () => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e, label) =>
    setFormState((prev) => ({ ...prev, [label]: e.target.value }));

  const clearState = () => setFormState({ ...initialState });

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Programming Expertise", JSON.stringify(formState));
  };

  console.log(JSON.parse(localStorage.getItem("Programming Expertise")));

  const inputList = [
    { label: "Title", type: "text", name: "title" },
    { label: "SubTitle", type: "text", name: "subtitle" },
    { label: "City", type: "text", name: "city" },
    { label: "Country", type: "text", name: "country" },
    { label: "StartDate", type: "date", name: "startdate" },
    { label: "EndDate", type: "date", name: "enddate" },
    { label: "Description", type: "text", name: "description" },
  ].map(({ label, type, name }, index) => {
    return (
      <div key={`${label}${index}`}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          value={formState[label]}
          onChange={(e) => handleChange(e, label)}
        />
      </div>
    );
  });
  return (
    <div className="expertise container">
      <h1>Programming Expertise</h1>
      <form onSubmit={onSubmit}>
        {inputList}
        <button type="submit">Save</button>
        <button type="button" onClick={clearState}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default ProgrammingExpertise;
