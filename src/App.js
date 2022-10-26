import './App.css'
import Header from './components/Header'
import DownloadButton from './components/DownloadButton'
import ProgrammingExpertise from './components/ProgrammingExpertise'
import Education from './components/Education'
import PersonalInformation from './components/PersonalInformation'
import CV from './components/CV'
import Skills from './components/Skills'
import SkipLink from './components/SkipLink'

function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id='main'>
        <DownloadButton />
        <ProgrammingExpertise />
        <Education />
        <PersonalInformation />
        <Skills />
        <CV />
      </main>
    </>
  )
}

export default App
