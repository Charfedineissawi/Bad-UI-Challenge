import React, { useState } from "react";
import "./App.css";

const BadDesignForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    size: "",
    animals: [],  
    images: [],
  });
  const [animalInput, setAnimalInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAgreeButton, setShowAgreeButton] = useState(false);

  // Handles generic input changes for formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Adds animal and image to formData
  const handleAnimalImageChange = () => {
    if (animalInput.trim() && imageInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        animals: [...prev.animals, animalInput],
        images: [...prev.images, imageInput],
      }));
      setAnimalInput("");
      setImageInput("");
    }
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setShowAgreeButton(true);
  };

  // Transforms the last character of a string
  const transformLastCharacter = (text) => {
    if (!text) return text;
    const lastChar = text.slice(-1);
    const transformedLastChar = String.fromCharCode(lastChar.charCodeAt(0) + 1);
    return text.slice(0, -1) + transformedLastChar;
  };

  // Closes modal and resets form
  const closeModal = () => {
    setShowModal(false);
    setFormData({
      date: "",
      size: "",
      animals: [],
      images: [],
    });
    setShowAgreeButton(false);
  };

  return (
    <div className="container">
      <h1 className="bad-title">F0rmUlaIrE Bizarre !!!!</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* Date Input */}
        <div className="field">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="bad-input"
          />
        </div>

        {/* Size Input */}
        <div className="field">
          <input
            type="text"
            name="size"
            placeholder="tailleDEi!!!"
            value={formData.size}
            onChange={handleChange}
            className="bad-input"
          />
        </div>

        {/* Animal and Image Inputs */}
        <div className="field">
          <input
            type="text"
            name="animal"
            placeholder="ANIMAL (Ecrire mal)"
            value={animalInput}
            onChange={(e) =>
              setAnimalInput(transformLastCharacter(e.target.value))
            }
            className="bad-input"
          />
          <input
            type="url"
            name="image"
            placeholder="URL d'imaGGEEE !!!!"
            value={imageInput}
            onChange={(e) =>
              setImageInput(transformLastCharacter(e.target.value))
            }
            className="bad-input"
          />
          <button
            type="button"
            onClick={handleAnimalImageChange}
            className="bad-submit-button"
          >
            Ajouter Animal et Image
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bad-submit-button">
          SouMetTre xD
        </button>
      </form>

      {/* Modal for Form Data */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Form Data:</h2>
            <p>Date: {formData.date}</p>
            <p>Size: {formData.size}</p>
            <p>Animals: {formData.animals.join(", ")}</p>
            <p>Images: {formData.images.join(", ")}</p>
            <button onClick={closeModal} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Agree Button */}
      {showAgreeButton && (
        <div className="agree-button-container">
          <button
            onClick={() => alert("Thank you for agreeing!")}
            className="agree-button"
          >
            Je suis d'accord avec les termes
          </button>
        </div>
      )}
    </div>
  );
};

export default BadDesignForm;
