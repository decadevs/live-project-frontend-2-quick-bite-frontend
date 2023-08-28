import React, { useState } from "react";
import Modal from "../components/reusableComponents/Modal";
import "../styles/venfoodModal.css";

const OrdersModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      foodName: "FUFU",
      price: 2000,
      userAddress: "123 Okorohmi, Benin City",
      status: "pending",
    },
  ];

  const handleModalOpen = (order: React.SetStateAction<null>) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveStatus = (newStatus: string) => {
    if (selectedOrder) {
      selectedOrder.status = newStatus;

      setSelectedOrder({ ...selectedOrder });
    }
    // handleModalClose();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {orders.map((order, index) => (
        <div key={index}>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleModalOpen(order)}
          >
            View Order: {}
          </button>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {selectedOrder && (
          <>
            <h2 className="details">Order Details</h2>
            <p>
              <strong>Food Name:</strong> {selectedOrder.foodName}
            </p>
            <p>
              <strong>Price:</strong> #{selectedOrder.price.toFixed(2)}
            </p>
            <p>
              <strong>User's Address:</strong> {selectedOrder.userAddress}
            </p>
            <p>
              <strong>Status:</strong>
              <select
                value={selectedOrder.status}
                onChange={(e) => handleSaveStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="ready">Ready</option>
              </select>
            </p>
            <button className="close-modal" onClick={handleModalClose}>
              Close Modal
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default OrdersModal;
