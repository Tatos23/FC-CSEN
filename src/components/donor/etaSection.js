import "/etaSection.css";
import React from "react";

function etaSection({ eta }) {
    return (
        <div className="eta-section">
            <h2>Estimated Time of Arrival</h2>
            <p>{eta}</p>
        </div>
    );
}

export default etaSection;