export default function LayoutClassic({
  contact,
  personalIntro,
  education,
  experience,
  language,
  skill,
  references,
}) {
  return (
    <div>
      {personalIntro && (
        <>
          <h2>Personal Introduction</h2>
          <p>{personalIntro}</p>
          <hr />
        </>
      )}
      {(contact.name ||
        contact.surname ||
        contact.email ||
        contact.address ||
        contact.telephone) && (
        <>
          <h2>Contact Information</h2>
          <p>
            {contact.name} {contact.surname}
          </p>
          <p>{contact.email}</p>
          <p>{contact.address}</p>
          <p>{contact.telephone}</p>
          <hr />
        </>
      )}

      {education.some(
        (edu) =>
          (edu.schoolName || "").trim() !== "" ||
          (edu.degree || "").trim() !== "" ||
          (edu.graduationDate || "").trim() !== ""
      ) && (
        <>
          <h2>Education</h2>
          {education
            .filter(
              (edu) =>
                (edu.schoolName || "").trim() !== "" ||
                (edu.degree || "").trim() !== "" ||
                (edu.graduationDate || "").trim() !== ""
            )
            .map((edu, index) => (
              <div key={index}>
                <h3>{edu.schoolName}</h3>
                <p>{edu.degree}</p>
                <p>{edu.graduationDate}</p>
              </div>
            ))}

          <hr />
        </>
      )}

      {experience.some(
        (exp) =>
          (exp.companyName || "").trim() !== "" ||
          (exp.position || "").trim() !== "" ||
          (exp.startDate || "").trim() !== "" ||
          (exp.endDate || "").trim() !== ""
      ) && (
        <>
          <h2>Experience</h2>
          {experience
            .filter(
              (exp) =>
                (exp.companyName || "").trim() !== "" ||
                (exp.position || "").trim() !== "" ||
                (exp.startDate || "").trim() !== "" ||
                (exp.endDate || "").trim() !== ""
            )
            .map((exp, index) => (
              <div key={index}>
                <h3>{exp.companyName}</h3>
                <p>{exp.position}</p>
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
            ))}

          <hr />
        </>
      )}

     {language.some(
  (lang) =>
    (lang.languageName || "").trim() !== "" ||
    (lang.level || "").trim() !== ""
) && (
  <>
    <h2>Languages</h2>

    {language
      .filter(
        (lang) =>
          (lang.languageName || "").trim() !== "" ||
          (lang.level || "").trim() !== ""
      )
      .map((lang, index) => (
        <div key={index}>
                  <h3>{lang.languageName}</h3>
                  <p>{lang.level}</p>
        </div>
      ))}

    <hr />
  </>
)}

      {skill.some(
        (sk) =>
          (sk.skillName || "").trim() !== "" ||
          (sk.level || "").trim() !== ""
      ) && (
        <>
          <h2>Skills</h2>

          {skill
            .filter(
              (sk) =>
                (sk.skillName || "").trim() !== "" ||
                (sk.level || "").trim() !== ""
            )
            .map((sk, index) => (
              <div key={index}>
                <h3>{sk.skillName}</h3>
                <p>{sk.level}</p>
              </div>
            ))}

          <hr />
        </>
      )}

      {references.some(
        (ref) =>
          (ref.referenceName || "").trim() !== "" ||
          (ref.referenceMail || "").trim() !== "" ||
          (ref.referencePhone || "").trim() !== ""
      ) && (
        <>
          <h2>References</h2>

          {references
            .filter(
              (ref) =>
                (ref.referenceName || "").trim() !== "" ||
                (ref.referenceMail || "").trim() !== "" ||
                (ref.referencePhone || "").trim() !== ""
            )
            .map((ref, index) => (
              <div key={index}>
                <h3>{ref.referenceName}</h3>
                <p>{ref.referenceMail} - {ref.referencePhone}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
