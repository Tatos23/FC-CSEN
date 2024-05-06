import "./EtaSection.css";
import React from "react";
import Header from "./Header";

function EtaSection({ eta }) {
    return (
        <div className="EtaSection">
            <div className="EtaSection-title">
                <h2 className="EtaSection-title">Estimated Time of Arrival</h2>
            </div>
            <div className="EtaSection-eta">
                 <p className="EtaSection-eta">{eta}</p>
            </div>
        </div>
    );
}

export default EtaSection;