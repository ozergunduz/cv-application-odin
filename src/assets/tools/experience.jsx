import { useState } from "react";

export default function Experience({ experience, setExperience }) {
  const [isOpen, setIsOpen] = useState(false);

  function addExperience() {
    setExperience([
      ...experience,
      {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function deleteExperience(indexToDelete) {
    setExperience(experience.filter((_, index) => index !== indexToDelete));
  }

  function handleChange(index, field, value) {
    const updatedExperience = experience.map((exp, i) => {
      if (i === index) {
        return {
          ...exp,
          [field]: value,
        };
      }

      return exp;
    });

    setExperience(updatedExperience);
  }

  return (
    <div className="experience">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Experience
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
          {experience.map((exp, index) => (
            <div key={index} >
              <input
                type="text"
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) =>
                  handleChange(index, "companyName", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) =>
                  handleChange(index, "position", e.target.value)
                }
              />

              <input
                type="date"
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />

              <input
                type="date"
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(index, "endDate", e.target.value)
                }
              />

              <button onClick={() => deleteExperience(index)} className="deleteButton">
                Delete Experience
              </button>
            </div>
          ))}

          <button onClick={addExperience}>Add Experience</button>
        </div>
      )}
    </div>
  );
}