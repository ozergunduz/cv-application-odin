import { useRef } from "react";

export default function PhotoUpload({ setPhoto }) {

  const fileInputRef = useRef();

  function handlePhotoChange(e) {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  }

  return (
    <div>

      <button
        onClick={() => fileInputRef.current.click()}
        
      >
        Add Photo
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: "none" }}
      />

    </div>
  );
}