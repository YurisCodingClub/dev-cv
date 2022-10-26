import React from 'react'

function PersonalInformation() {
  return (
    <div>
      <h1> Personal Information</h1>

      <form>
        <ul>
          <li>
            <label for='form-fullname'>Fullname*:</label>
            <input
              type='text'
              name='customername'
              id='form-fullname'
              placeholder='John Doe'
              aria-label='Provide Your Full Name'
              required
            />
          </li>
          <li>
            <label for='form-job-title'>Job Title:</label>
            <input
              type='text'
              name='jobtitle'
              id='form-job-title'
              placeholder='Enter Job Title'
              aria-label='Provide Your Job Title'
            />
          </li>
          <li>
            <label for='form-email'>Email:</label>
            <input
              type='email'
              name='email'
              id='form-email'
              placeholder='me@email.com'
              aria-label='Provide Your Email '
            />
          </li>
          <li>
            <label for='form-tel'>
              Phone number:{' '}
              <input
                type='tel'
                name='telephone'
                id='form-tel'
                placeholder='Enter Phone Number'
                aria-label='Provide Your Phone number '
              />
            </label>
          </li>
          <li>
            <label for='form-address'>
              Address (simplified):
              <input
                type='text'
                name='address'
                id='form-address'
                placeholder='Enter Address'
                aria-label='Provide Your Address '
              />
            </label>
          </li>
          <li>
            <label for='form-github'>
              Link to GitHub (recommended):
              <input
                type='text'
                name='github'
                id='form-github'
                placeholder='https://mygithub.com'
                aria-label='Provide a Github Link '
              />
            </label>
          </li>
          <li>
            <label for='form-portfolio'>
              Link to Portfolio (optional):
              <input
                type='text'
                name='portfolio'
                id='form-portfolio'
                placeholder='https://myportfolio.com'
                aria-label='Provide a Portfolio Link'
              />
            </label>
          </li>
          <li>
            <label for='form-linkedin'>
              Link to Linkedin (optional):
              <input
                type='text'
                name='linkedin'
                id='form-linkedin'
                placeholder='https://myLinkedIn.com'
                aria-label='Provide Your LinkedIn Link'
              />
            </label>
          </li>
        </ul>

        <button> Save </button>
        <button> Cancel </button>
      </form>
    </div>
  )
}

export default PersonalInformation
