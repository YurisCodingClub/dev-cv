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
          <label for='city'>City</label>
          <input type='text' name='city' id='city' required />
        </div>
        <div>
          <label for='country'>Country</label>
          <input
            type='text'
            name='country'
            id='country'
            autoComplete='country-name'
            required
          />
        </div>
        <div>
          <label for='start-date'>Start Date</label>
          <input type='date' name='startDate' id='startDate' required />
        </div>
        <div>
          <label for='end-date'>End Date</label>
          <input type='date' name='endDate' id='endDate' required />
        </div>
        <div>
          <label for='description'>Description</label>
          <textarea name='description' id='description' required></textarea>
        </div>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default Education;
