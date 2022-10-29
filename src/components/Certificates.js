const Certificates = () => {
  return (
    <div>
      <h1>Certificate</h1>

      <form>
        <ul>
          <li>
            <label for='form-certificate'>Certificate</label>
            <input
              type='text'
              name='certificate'
              id='form-certificate'
              placeholder='Enter certificate Name'
              aria-label='Enter Your certificate Name'
            />
          </li>
          <li>
            <label for='form-additional-info'>Additional Information</label>
            <input
              type='text'
              name='additionalInfo'
              id='form-additional-info'
              placeholder='Enter Additional Info'
              aria-label='Provide Additional Info about certificate'
            />
          </li>
        </ul>

        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default Certificates
