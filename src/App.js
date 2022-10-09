import "./App.css";
import Header from "./components/Header";
import DownloadButton from "./components/DownloadButton";
import ProgrammingExpertise from "./components/ProgrammingExpertise";
import Education from "./components/Education";
import PersonalInformation from "./components/PersonalInformation";
import CV from './components/CV';

function App() {
  return (
    <>
      <Header />
      <DownloadButton />
      <ProgrammingExpertise />
      <Education />
      <PersonalInformation />
      <CV />
    </>
  );
}

export default App;
