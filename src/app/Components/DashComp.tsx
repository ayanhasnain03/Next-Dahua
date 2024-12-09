"use client";

import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import moment from "moment";

const DashComp = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  // Fetch messages when component is mounted
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/message");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else {
        console.error("Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleOpenModal = (message: any) => {
    setSelectedMessage(message);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMessage(null);
  };

  const handleDelete = async (messageId: string) => {
    try {
      const res = await fetch(`/api/message`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: messageId }),
      });

      if (res.ok) {
        // Using callback to ensure the state is updated with the most recent messages
        setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== messageId));
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message", error);
    }
  };

  const getCurrentDate = () => {
    return moment().format("dddd, MMMM D, YYYY");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Admin Dashboard</h1>
          <p className="text-lg text-gray-400">Manage and review incoming messages</p>
          <p className="mt-2 text-lg text-gray-400">Today's Date: {getCurrentDate()}</p>
          <p className="mt-2 text-lg text-gray-400">Total Messages: {messages.length}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div
              key={message._id}
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-semibold text-indigo-600">{message.name}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {message.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {message.phone}
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  <p><strong>Time:</strong> {moment(message.createdAt).format("hh:mm:ss A")}</p>
                  <p><strong>Date:</strong> {moment(message.createdAt).format("YYYY-MM-DD")}</p>
                </div>

                <div className="mt-4 flex space-x-4 justify-end">
                  <button
                    onClick={() => handleOpenModal(message)}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    aria-label="View"
                  >
                    <FaEye size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(message._id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    aria-label="Delete"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {openModal && selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-lg w-11/12 sm:w-1/2 md:w-1/3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-indigo-600">Message Details</h2>
                <button onClick={handleCloseModal} aria-label="Close">
                  <MdClose size={24} className="text-black" />
                </button>
              </div>
              <div>
                <p><strong>Name:</strong> {selectedMessage.name}</p>
                <p><strong>Email:</strong> {selectedMessage.email}</p>
                <p><strong>Phone:</strong> {selectedMessage.phone}</p>
                <p><strong>Sent On:</strong> {moment(selectedMessage.createdAt).format("YYYY-MM-DD hh:mm:ss A")}</p>
                <div className="mt-4">
                  <p><strong>Message:</strong></p>
                  <p className="text-gray-700">{selectedMessage.message}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashComp;
