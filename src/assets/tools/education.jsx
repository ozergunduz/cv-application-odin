import { useState } from "react";

export default function Education({ education, setEducation }) {
  const [isOpen, setIsOpen] = useState(false);

  function addEducation() {
    setEducation([
      ...education,
      {
        schoolName: "",
        degree: "",
        graduationDate: "",
      },
    ]);
  }

  function deleteEducation(indexToDelete) {
    setEducation(education.filter((_, index) => index !== indexToDelete));
  }

  function handleChange(index, field, value) {
    const updatedEducation = education.map((edu, i) => {
      if (i === index) {
        return {
          ...edu,
          [field]: value,
        };
      }

      return edu;
    });

    setEducation(updatedEducation);
  }

  return (
    <div className="education">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Education
      </button>

      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {education.map((edu, index) => (
            <div
              key={index}
             
            >
              <input
                type="text"
                placeholder="School Name"
                value={edu.schoolName}
                onChange={(e) =>
                  handleChange(index, "schoolName", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  handleChange(index, "degree", e.target.value)
                }
              />

              <input
                type="date"
                value={edu.graduationDate}
                onChange={(e) =>
                  handleChange(index, "graduationDate", e.target.value)
                }
              />

              <button onClick={() => deleteEducation(index)}
                className="deleteButton">
                Delete Education
              </button>
            </div>
          ))}

          <button onClick={addEducation}>Add Education</button>
        </div>
      )}
    </div>
  );
}
