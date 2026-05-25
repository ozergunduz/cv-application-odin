import { useState } from "react";

export default function Language({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  function addLanguage() {
    setLanguage([
      ...language,
      {
        languageName: "",
        level: "",
      },
    ]);
  }

  function deleteLanguage(indexToDelete) {
    setLanguage(language.filter((_, index) => index !== indexToDelete));
  }

  function handleChange(index, field, value) {
    const updatedLanguage = language.map((lang, i) => {
      if (i === index) {
        return {
          ...lang,
          [field]: value,
        };
      }

      return lang;
    });

    setLanguage(updatedLanguage);
  }

  return (
    <div className="language">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Language
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
          {language.map((lang, index) => (
            <div key={index} >
              <input
                type="text"
                placeholder="Language"
                value={lang.languageName}
                onChange={(e) =>
                  handleChange(index, "languageName", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Level"
                value={lang.level}
                onChange={(e) => handleChange(index, "level", e.target.value)}
              />

              <button onClick={() => deleteLanguage(index)} className="deleteButton">
                Delete Language
              </button>
            </div>
          ))}

          <button onClick={addLanguage}>Add Language</button>
        </div>
      )}
    </div>
  );
}
