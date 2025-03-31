import React from "react";
import { useNavigate } from "react-router-dom";  // React Router's hook to navigate programmatically
import './TeleVet.css';

const TeleVet = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);  // Navigate to the specified path
  };

  return (
    <div className="tele-vet-container">
      <h2>TeleVet Services</h2>
      <p className="tele-vet-text">
        Oferim servicii veterinare de cea mai înaltă calitate atât în cabinete, cât și la domiciliu pentru a putea raspunde cat mai bine nevoilor dumnevoastra.

        Ambele cabinete dispun de dotari perfomante care permit realizarea de analize complete de laborator, consultatii, tratamente,interventii chirurgicale, vaccinari, deparazitari , microcipari si alte servicii complementare de cea mai inalta calitate. Personalul medical ii asteapta pe prietenii necuvantatori intr-o atmosfera prietenoasa,menita sa creasca confortul animalutului.


      </p>
      <div className="button-container">
        <button className="tele-button" onClick={() => handleButtonClick("/chat")}>Chat</button>
        <button className="tele-button" onClick={() => handleButtonClick("/video")}>Video</button>
        <button className="tele-button" onClick={() => handleButtonClick("/audio")}>Audio</button>
      </div>
    </div>
  );
};

export default TeleVet;
