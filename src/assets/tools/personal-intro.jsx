import { useState } from "react";

export default function PersonalIntro({ personalIntro, setPersonalIntro }) { 
    
        const [isOpen, setIsOpen] = useState(false);

        return (
        <div className="personal-intro">

            <button 
            onClick={() => setIsOpen(!isOpen)}
            >
             Add Personal Introduction
            </button>

            {isOpen && (
                <textarea
                  style={{
                  width: "100%",
                  minHeight: "150px",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "15px"
                  
             }}
                
                name="personalIntro" 
                id="personalIntro"
                value={personalIntro}
                onChange={(e) => setPersonalIntro(e.target.value)}
                placeholder="This section allows you to write a brief introduction about yourself.
                You can include your career goals, key skills, and a summary of your
                professional background. This is a great place to make a strong first
                impression on potential employers. Keep it concise and focused on
                what makes you unique as a candidate."
                />
             )
            }
        </div>
    );
}
            
            
       


   