import React, { useState } from "react";
import "../styles/cardSection.css";
import food1 from "../assets/food1.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";

interface Props {
  name: string;
  description: string;
  onEdit: (name: string, description: string) => void;
}

const CardSection: React.FC<Props> = ({ name, description, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleSaveClick = () => {
    onEdit(editedName, editedDescription);
    setShowModal(false);
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card-section-container">
        <img src={food1} alt="food" />
        <div className="text-area">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <h2 className="foodtitle">{name}</h2>
        <p className="foodtext">{description}</p>
        {/* <FaEdit onClick={handleEditClick} className="desktop-icons" />{" "} */}
        <div className="price">
          <p>N12500</p>
          <BsPlusSquare className="desktop-icons" />
        </div>
        <div className="mobile-icons">
          <FaEdit onClick={handleEditClick} /> <BsPlusSquare />
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Edit Food Item</h3>
              <label>Name</label>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <label>Description</label>
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <div className="modal-buttons ">
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="card-section-container-mobile">
      <img src={food1} alt="food" />
      <h2>{name}</h2>
      <p>{description}</p>
      <FaEdit onClick={handleEditClick} /> <MdDelete />
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Food Item</h3>
            <label>Name</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <div className="modal-buttons ">
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div> */}
    </>
  );
};

export default CardSection;
