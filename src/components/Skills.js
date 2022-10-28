import React from "react";
import "../index.css";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills container">
      <h1> Skills</h1>

      <form>
        <ul>
          <li>
            <label for="form-technical">Technical Skills:</label>
            <input
              type="text"
              name="technicalskills"
              id="form-technical"
              placeholder="Enter Your Technical Skills"
              aria-label="Provide Your Technical Skills"
            />
          </li>
          <li>
            <label for="form-business">Buisness Skills:</label>
            <input
              type="text"
              name="buisnesSkills"
              id="form-buisness"
              placeholder="Enter Your Buisness Skills"
              aria-label="Provide Your Buisness Skills"
            />
          </li>
          <li>
            <label for="form-programming">Programming Lang:</label>
            <input
              type="text"
              name="programming"
              id="form-programming"
              placeholder="Javascript"
              aria-label="Provide a Programming Language "
            />
          </li>
          <li>
            <label for="form-tools">Tools:</label>
            <input
              type="text"
              name="tools"
              id="form-tools"
              placeholder="Enter Your Tools"
              aria-label="Provide Your Tools "
            />
          </li>
          <li>
            <label for="form-language">Languages:</label>
            <input
              type="text"
              name="language"
              id="form-language"
              placeholder="English "
              aria-label="Provide Your Languages "
            />
          </li>
        </ul>

        <button> Save </button>
        <button> Cancel </button>
      </form>
    </div>
  );
}

export default Skills;
