import { useState } from "react";

export default function Skill({ skill, setSkill }) {
  const [isOpen, setIsOpen] = useState(false);

  function addSkill() {
    setSkill([
      ...skill,
      {
        skillName: "",
        level: "",
      },
    ]);
  }

  function deleteSkill(indexToDelete) {
    setSkill(skill.filter((_, index) => index !== indexToDelete));
  }

  function handleChange(index, field, value) {
    const updatedSkill = skill.map((skl, i) => {
      if (i === index) {
        return {
          ...skl,
          [field]: value,
        };
      }

      return skl;
    });

    setSkill(updatedSkill);
  }

  return (
    <div className="skill">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Skill
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
          {skill.map((skl, index) => (
            <div key={index} >
              <input
                type="text"
                placeholder="Skill Name"
                value={skl.skillName}
                onChange={(e) =>
                  handleChange(index, "skillName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Level"
                value={skl.level}
                onChange={(e) => handleChange(index, "level", e.target.value)}
              />
              <button
                onClick={() => deleteSkill(index)}
                className="deleteButton"
              >
                Delete
              </button>
            </div>
          ))}
          <button onClick={addSkill}>Add Skill</button>
        </div>
      )}
    </div>
  );
}
