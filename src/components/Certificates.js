import { useState } from 'react'

const Certificates = () => {
  const [certificate, setCertificate] = useState('')
  const [certificateInfo, setCertificateInfo] = useState('')

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const certificateData = {
      Certificate: certificate,
      AdditionalInfo: certificateInfo,
    }
    localStorage.setItem('Certificate', JSON.stringify(certificateData))
  }

  const handleClear = () => {
    setCertificate('')
    setCertificateInfo('')
    localStorage.removeItem('Certificate')
  }

  return (
    <div>
      <h1>Certificate</h1>

      <form onSubmit={hanldeSubmit}>
        <ul>
          <li>
            <label for='form-certificate'>Certificate</label>
            <input
              type='text'
              name='certificate'
              id='form-certificate'
              placeholder='Enter certificate Name'
              aria-label='Enter Your certificate Name'
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
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
              value={certificateInfo}
              onChange={(e) => setCertificateInfo(e.target.value)}
            />
          </li>
        </ul>

        <button>Save</button>
        <button onClick={handleClear}>Cancel</button>
      </form>
    </div>
  )
}

export default Certificates
