import React, { useState } from "react";
import { FaCalendarAlt, FaNotesMedical } from "react-icons/fa";
import "./DigitalAgenda.css";

const DigitalAgenda = () => {
    const [popupData, setPopupData] = useState(null);

    const medicalRecords = [
        { date: "2024-03-10", description: "Annual Checkup - All Good" },
        { date: "2023-12-05", description: "Vaccination - Rabies Shot" },
        { date: "2023-12-05", description: "Vaccination - Rabies Shot" },
    ];

    const appointments = [
        { date: "2024-04-15", time: "10:30 AM", doctor: "Dr. Smith" },
        { date: "2024-05-22", time: "3:00 PM", doctor: "Dr. Johnson" },
        { date: "2024-05-22", time: "3:00 PM", doctor: "Dr. Johnson" },
    ];

    const handleCardClick = (item) => {
        setPopupData(item);
    };

    return (
        <div className="digital-agenda-container">
            {/* Introductory Message */}
            <div className="agenda-intro">
                <h2>Welcome to Your Digital Agenda</h2>
                <p>You can check your pet's medical records and upcoming appointments below.</p>
                <p>Click on any record or appointment to view more details.</p>
            </div>

            {/* Medical Records Section */}
            <div className="agenda-section">
                <h2 className="agenda-title">Medical Records</h2>
                {medicalRecords.length > 0 ? (
                    medicalRecords.map((record, index) => (
                        <div key={index} className="agenda-card record-card" onClick={() => handleCardClick(record)}>
                            <FaNotesMedical className="agenda-icon" />
                            <strong>{record.date}</strong> - {record.description}
                        </div>
                    ))
                ) : (
                    <p className="no-data">No medical records found.</p>
                )}
            </div>

            {/* Upcoming Appointments Section */}
            <div className="agenda-section">
                <h2 className="agenda-title">Upcoming Appointments</h2>
                {appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                        <div key={index} className="agenda-card appointment-card" onClick={() => handleCardClick(appointment)}>
                            <FaCalendarAlt className="agenda-icon" />
                            <strong>{appointment.date}</strong> at {appointment.time} with {appointment.doctor}
                        </div>
                    ))
                ) : (
                    <p className="no-data">No upcoming appointments.</p>
                )}
            </div>

            {/* Pop-up Window */}
            {popupData && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Details</h3>
                        <p><strong>Date:</strong> {popupData.date}</p>
                        {"time" in popupData && <p><strong>Time:</strong> {popupData.time}</p>}
                        {"doctor" in popupData && <p><strong>Doctor:</strong> {popupData.doctor}</p>}
                        {"description" in popupData && <p><strong>Description:</strong> {popupData.description}</p>}
                        <button className="close-btn" onClick={() => setPopupData(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DigitalAgenda;
