"use client"; // Marks this as a client component

import React, { useState } from "react";
import Image from "next/image";

const DetailPeminjaman = () => {
  const [activeTab, setActiveTab] = useState("Akan Datang");
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  const statusData = [
      {
        date: "12 September 2024",
        time: "08:00 - 15:00",
        room: "Ruangan Aula FEB",
        building: "Gedung 3 FKIP UNS",
        status: "🟢Verifikasi",
        statusColor: "bg-green-300",
        icon: "✅",
      },
      {
        date: "12 September 2024",
        time: "08:00 - 15:00",
        room: "Ruangan Aula Vokasi",
        building: "Gedung 3 FKIP UNS",
        status: "🟡Proses",
        statusColor: "bg-yellow-300",
        icon: "🕐",
      },
      {
        date: "12 September 2024",
        time: "08:00 - 15:00",
        room: "Ruangan Aula Teknik",
        building: "Gedung 3 FKIP UNS",
        status: "🔴Dibatalkan",
        statusColor: "bg-red-300",
        icon: "❌",
      },
      {
        date: "12 September 2024",
        time: "08:00 - 15:00",
        room: "Ruangan Aula Rektorat",
        building: "Gedung 3 FKIP UNS",
        status: "🟡Proses",
        statusColor: "bg-yellow-300",
        icon: "🕐",
      },
      {
        date: "12 September 2024",
        time: "08:00 - 15:00",
        room: "Ruangan Aula FEB",
        building: "Gedung 3 FKIP UNS",
        status: "🟢Verifikasi",
        statusColor: "bg-green-300",
        icon: "✅",
      },
    // Data status lainnya...
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-gray-100 text-black px-4 py-2 rounded-md">
          Filter Status
        </button>
        <div className="relative">
          <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none"
          />
          <span className="absolute right-2 top-2 text-gray-400">🔍</span>
        </div>
      </div>

      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="text-left bg-gray-100 border-b">
            <th className="p-3">Tanggal</th>
            <th className="p-3">Waktu Mulai - Selesai</th>
            <th className="p-3">Ruangan</th>
            <th className="p-3">Gedung</th>
            <th className="p-3">Status</th>
            <th className="p-3">Cetak</th>
          </tr>
        </thead>
        <tbody>
        {statusData
                .filter(
                  (status) =>
                    status.date.toLowerCase().includes(search.toLowerCase()) ||
                    status.time
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    status.room
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    status.building.toLowerCase().includes(search.toLowerCase())
                )          
          .map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{item.date}</td>
              <td className="p-3">{item.time}</td>
              <td className="p-3">{item.room}</td>
              <td className="p-3">{item.building}</td>
              <td className="p-3">
                <span
                  className={`text-white px-2 py-1 rounded-full ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3">
                <button className="bg-gray-100 p-2 rounded">🖨️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailPeminjaman;
