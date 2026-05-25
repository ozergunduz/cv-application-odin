import { useState } from "react";

export default function Layouts({ layouts, setLayouts }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layouts">
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        Layouts
      </button>

      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            className="layoutClassic"
            
            onClick={() => setLayouts({ layoutName: "classic" })}
          >
            Classic
          </button>

          <button
            className="layoutLeftOriented"
            
            onClick={() => setLayouts({ layoutName: "leftOriented" })}
            
          >
            Left Oriented
          </button>

          <button
            className="layoutClassicWithPhoto"
            
            onClick={() => setLayouts({ layoutName: "classicWithPhoto" })}
          >
            Classic with Photo
          </button>

          <button
            className="layoutLeftOrientedWithPhoto"
            
            onClick={() => setLayouts({ layoutName: "leftOrientedWithPhoto" })}
          >
            Left Oriented with Photo
          </button>
        </div>
      )}
    </div>
  );
}
