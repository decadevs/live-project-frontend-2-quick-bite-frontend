// import "../styles/cardSection.css";
// import food1 from "../assets/food1.png";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// interface props {
//   name: string;
//   description: string;
// }

// let foods = [
//   { name: "Fried rice", description: "hot and spice " },
//   { name: "Moi-moi", description: "hot and spice " },
//   { name: "Abacha", description: "hot and spice " },
//   { name: "Grilled Chiken", description: "hot and spice " },
//   { name: "Egusi & fudu", description: "hot and spice " },
// ];

// const CardSection = (prop: props) => {
//   return (
//     <div className="card-section-container">
//       <img src={food1} alt="food" />
//       <h3>{prop.name}</h3>
//       <p>{prop.description}</p>
//       <FaEdit /> <MdDelete />
//     </div>
//   );
// };

// export default CardSection;

import React, { useState } from "react";
import "../styles/cardSection.css";
import food1 from "../assets/food1.jpeg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
        <FaEdit onClick={handleEditClick} className="desktop-icons" />{" "}
        <MdDelete className="desktop-icons" />
        <div className="mobile-icons">
          <FaEdit onClick={handleEditClick} /> <MdDelete />
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
