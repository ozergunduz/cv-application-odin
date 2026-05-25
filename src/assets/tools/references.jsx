import { useState } from "react";

export default function References({ references, setReferences }) {
  const [isOpen, setIsOpen] = useState(false);


function addReference() {
    setReferences([
      ...references,
      {
        referenceName: "",
        referenceMail: "",
        referencePhone: "",
      },
    ]);
  }

  function deleteReference(indexToDelete) {
    setReferences(references.filter((_, index) => index !== indexToDelete));
  } 

  function handleChange(index, field, value) {
    const updatedReferences = references.map((ref, i) => {
      if (i === index) {
        return {
          ...ref,
          [field]: value,
        };
      }
      return ref;
    });
    setReferences(updatedReferences);
  }

  
  return (
    <div className="references">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        References
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
          {references.map((ref, index) => (
            <div key={index} >
              <input
                type="text"
                placeholder="Reference Name"
                value={ref.referenceName}
                onChange={(e) => handleChange(index, "referenceName", e.target.value)}
              />

              <input
                type="email"
                placeholder="Reference Email"
                value={ref.referenceMail}
                onChange={(e) => handleChange(index, "referenceMail", e.target.value)}
              />
              <input
                type="text"
                placeholder="Reference Phone"
                value={ref.referencePhone}
                onChange={(e) => handleChange(index, "referencePhone", e.target.value)}
              />
              <button
                onClick={() => deleteReference(index)}
                className="deleteButton"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addReference}
          >
            Add Reference
          </button>
        </div>
      )}
    </div>
  );
}
