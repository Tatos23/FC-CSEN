import "./EtaSection.css";
import React, { useEffect, useState } from "react";

function EtaSection({ timeToMeet }) {
    const [eta, setEta] = useState('');

    const calculateEta = (timeToMeet) => {
        const currentTime = new Date().getTime();
        const meetingTime = new Date(timeToMeet).getTime();
        const remainingTime = meetingTime - currentTime;

        // Convert remaining time to days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEta(calculateEta(timeToMeet));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeToMeet]);

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