import React from 'react';

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <br />
      <form>
        <div>
          <label for='degree'>Degree</label>
          <input type='text' name='degree' id='degree' required />
        </div>
        <div>
          <label for='school'>School</label>
          <input type='text' name='school' id='school' required />
        </div>
        <div>
          <label for='gpa'>GPA</label>
          <input type='text' name='gpa' id='gpa' required />
        </div>
        <div>
          <label for='edu-city'>City</label>
          <input type='text' name='edu-city' id='edu-city' required />
        </div>
        <div>
          <label for='edu-country'>Country</label>
          <input
  type = 'text'
  name = 'edu-country'
  id = 'edu-country'
  autoComplete = 'country-name'
            required
          />
        </div>
        <div>
          <label for='edu-start-date'>Start Date</label>
          <input type='date' name='edu-start-date' id='edu-start-date' required />
        </div>
        <div>
          <label for='edu-end-date'>End Date</label>
          <input type='date' name='edu-end-date' id='edu-end-date' required />
        </div>
        <div>
          <label for='edu-description'>Description</label>
          <textarea name='edu-description' id='edu-description' required></textarea>
        </div>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default Education;
