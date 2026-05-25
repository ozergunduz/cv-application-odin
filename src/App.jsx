import { useState } from "react";
import "./App.css";
import ToolSide from "./assets/tool-side";
import CvDisplay from "./assets/cv-display";
import Intro from "./assets/tools/intro";

export default function App() {
  
  const [photo, setPhoto] = useState(null);
  
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    telephone: "",
  });
  const [personalIntro, setPersonalIntro] = useState("");
  
  
  const [education, setEducation] = useState([{
    schoolName: "",
    degree: "",
    graduationDate: "",
  }]);
  
  
  const [experience, setExperience] = useState([{
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
  },
]);
  const [language, setLanguage] = useState([{
    languageName: "",
    level: "",
  }]);
  
  const [skill, setSkill] = useState([{
    skillName: "",
    level: "",
  }]);
  
  const [references, setReferences] = useState([{
    referenceName: "",
    referenceMail: "",
    referencePhone: "",
  }]);

  const [layouts, setLayouts] = useState({
    layoutName: "",
  });

  return (
    <div className="app-container">
      <Intro />

      <div className="app">
        <ToolSide
          photo={photo}
          setPhoto={setPhoto}
          contact={contact}
          setContact={setContact}
          personalIntro={personalIntro}
          setPersonalIntro={setPersonalIntro}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          language={language}
          setLanguage={setLanguage}
          skill={skill}
          setSkill={setSkill}
          references={references}
          setReferences={setReferences}
          layouts={layouts}
          setLayouts={setLayouts}
        />

        <CvDisplay
          photo={photo}
          setPhoto={setPhoto}
          contact={contact}
          personalIntro={personalIntro}
          education={education}
          experience={experience}
          language={language}
          skill={skill}
          references={references}
          layouts={layouts}
        />
         <button

         className="saveButton"
  onClick={() => {
    window.print();
  }}
  style={{
    margin: "10px 30px 10px 10px",
    borderRadius: "15px"
  }}
>
  Save CV as PDF
</button>
       
      </div>
    </div>
  );
}
