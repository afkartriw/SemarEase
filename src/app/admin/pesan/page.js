"use client";
import React, { useState } from 'react';
import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  // Dummy Data for Users and Messages
  const users = [
    {
      id: 1,
      name: "shafahrmdht@student.uns.ac",
      lastMessage: "Ok....",
      lastActive: "04/09/2024",
      status: "active",
    },
    {
      id: 2,
      name: "IqbalGanteng@student.uns.ac",
      lastMessage: "Ok....",
      lastActive: "03/08/2024",
      status: "offline",
    },
  ];

  const messages = [
    { id: 1, text: "Pinjem ruanga vokasi bang.", time: "8:00 PM", sender: "user" },
    { id: 2, text: "Pesen aja brooo..", time: "8:00 PM", sender: "admin" },
    { id: 3, text: "Ok....", time: "8:00 PM", sender: "user" },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Logic for sending a message can be implemented here.
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="pt-24 pl-80 pr-10 bg-gray-200 min-h-screen flex">
        <div className="flex flex-1 p-10">
          {/* Chat List (Left Side) */}
          <div className="w-1/3 bg-white shadow-md flex flex-col">
            {/* Search Bar */}
            <div className="p-4">
              <input
                type="text"
                placeholder="Cari"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Selection */}
            <div className="p-4">
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Mahasiswa">Mahasiswa</option>
                <option value="Operator">Operator</option>
              </select>
            </div>

            {/* User List */}
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col h-full">
                {users.map((user) => (
                  <div
  key={user.id}
  className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${selectedUser === user.id ? "bg-gray-100" : ""}`}
  onClick={() => setSelectedUser(user.id)}
>
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
        SR
      </div>
      <div className="flex flex-col overflow-hidden">
        <h3 className="font-semibold text-gray-800 truncate">
          {user.name}
        </h3>
        <p className="text-sm text-gray-600 truncate">
          {user.lastMessage}
        </p>
      </div>
    </div>
    <div className="text-sm text-gray-400">{user.lastActive}</div>
  </div>
</div>

                ))}
              </div>
            </div>
          </div>

          {/* Conversation Area (Right Side) */}
          <div className="w-2/3 bg-white shadow-md flex flex-col">
            {selectedUser ? (
              <>
                {/* Header */}
                <div className="p-4 border-b flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {users.find((u) => u.id === selectedUser).name}
                    </h3>
                    <p className="text-sm text-gray-400">terakhir aktif 2 jam yang lalu</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex-1 overflow-auto">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                      >
                        <div className={`max-w-xs p-2 mb-4 rounded-lg ${msg.sender === "user" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                          <p>{msg.text}</p>
                          <span className="block text-right text-xs text-gray-500">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Ketik pesan..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Pilih pengguna untuk memulai percakapan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
