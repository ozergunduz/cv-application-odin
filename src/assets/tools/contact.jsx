import { useState } from "react";

export default function Contact({ contact, setContact }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contact">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Add Contact Information
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
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) =>
              setContact({
                ...contact,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Surname"
            value={contact.surname}
            onChange={(e) =>
              setContact({
                ...contact,
                surname: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="E-mail"
            value={contact.email}
            onChange={(e) =>
              setContact({
                ...contact,
                email: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="address"
            value={contact.address}
            onChange={(e) =>
              setContact({
                ...contact,
                address: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Telephone"
            value={contact.telephone}
            onChange={(e) =>
              setContact({
                ...contact,
                telephone: e.target.value,
              })
            }
          />
        </div>
      )}
    </div>
  );
}
