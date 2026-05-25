import Contact from "./tools/contact";
import PersonalIntro from "./tools/personal-intro";
import Education from "./tools/education";
import Experience from "./tools/experience";
import Language from "./tools/language";
import Skill from "./tools/skill";
import References from "./tools/references";
import Layouts from "./tools/layouts";
import PhotoUpload from "./tools/photo-upload";

export default function ToolSide({ 
    photo,
    setPhoto,
    contact,
    setContact,
    personalIntro, 
    setPersonalIntro, 
    education, 
    setEducation,
    experience,
    setExperience,
    language,
    setLanguage,
    skill,
    setSkill,
    references,
    setReferences,
    layouts,
    setLayouts
}) {

    return (
        <div className="tool-side">
            
            
            <Contact 
                contact={contact}
                setContact={setContact}
            />
            <PersonalIntro 
                personalIntro={personalIntro}
                setPersonalIntro={setPersonalIntro}
            />
            <Education 
                education={education}
                setEducation={setEducation}
            />
            <Experience 
                experience={experience}
                setExperience={setExperience}
            />
            <Language 
                language={language}
                setLanguage={setLanguage}
            />
            <Skill 
                skill={skill}
                setSkill={setSkill}
            />
            <References 
                references={references}
                setReferences={setReferences}
            />
            <Layouts
                layouts={layouts}
                setLayouts={setLayouts}
            />
            {(layouts.layoutName === "classicWithPhoto" ||
            layouts.layoutName === "leftOrientedWithPhoto") && (
            <PhotoUpload setPhoto={setPhoto} />
)}
        </div>
    );
 };