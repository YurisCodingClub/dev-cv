const ProfessionalExperience = () => {

  return (
    <>
      <h1>Professional Experience</h1>
      <form action="">
        <div>
          <label htmlFor="pe-title">Title</label>
          <input type="text" name="pe-title" id="pe-title" placeholder="Title" required/>
        </div>
        <div>
          <label htmlFor="pe-subtitle">Subtitle</label>
          <input type="text" name="pe-subtitle" id="pe-subtitle" placeholder="Subtitle" required/>
        </div>
        <div>
          <label htmlFor="pe-city">City</label>
          <input type="text" name="pe-city" id="pe-city" placeholder="City" required/>
        </div>
        <div>
          <label htmlFor="pe-country">Country</label>
          <input type="text" name="pe-country" id="pe-country" required/>
        </div>
        <div>
          <label htmlFor="pe-start-date">Start Date</label>
          <input type="date" name="pe-start-date" id="pe-start-date" placeholder="Start Date" required/>
        </div>
        <div>
          <label htmlFor="pe-end-date">End Date</label>
          <input type="date" name="pe-end-date" id="pe-end-date" placeholder="End Date" required/>
        </div>
        <div>
          <label for='pe-description'>Description</label>
          <textarea name='pe-description' id='pe-description' required></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
        <div>
          <button>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default ProfessionalExperience;