"use client";

import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";
import { useState } from "react";

const History = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  const data = [
    {
      email: "iqbalganteng@student.uns.ac.id",
      code: "123ABC",
      room: "Ruang 101",
      building: "Gedung A",
      operator: "Operator 1",
      date: "2024/09/01",
      time: "09:00 - 10:00",
      status: "Selesai",
    },
    {
      email: "shafaganteng@student.uns.ac.id",
      code: "456DEF",
      room: "Ruang 202",
      building: "Gedung B",
      operator: "Operator 2",
      date: "2024/09/02",
      time: "10:00 - 11:00",
      status: "Digunakan",
    },
    {
      email: "najwaganteng@student.uns.ac.id",
      code: "456DEF",
      room: "Ruang 202",
      building: "Gedung B",
      operator: "Operator 2",
      date: "2024/09/02",
      time: "10:00 - 13:00",
      status: "Dibatalkan",
    },
    // Tambahkan data histori lainnya...
  ];

  // Fungsi untuk mendapatkan kelas status berdasarkan nilai status
  const getStatusClass = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Didunakan":
        return "bg-yellow-100 text-yellow-800";
      case "Dibatalkan":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-24 ml-80 mr-10">
        <div className="container mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex flex-col items-start mb-4">
            <div className="pb-2 border-b border-gray-300 w-full">
              <h2 className="text-lg font-semibold">TABEL HISTORY</h2>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <label htmlFor="entries" className="mr-2">
                Show
              </label>
              <select
                id="entries"
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className="border rounded p-1"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
              <span className="ml-2">entries</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded p-1"
              />
            </div>
          </div>
          <table className="table-auto w-full text-center border-collapse">
            <thead className="bg-blue-100">
              {" "}
              <tr>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Kode ID</th>
                <th className="border px-4 py-2">Ruangan</th>
                <th className="border px-4 py-2">Gedung</th>
                <th className="border px-4 py-2">Operator</th>
                <th className="border px-4 py-2">Tanggal</th>
                <th className="border px-4 py-2">Waktu</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.email}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.code}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.room}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.building}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.operator}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap text-sm text-gray-900">
                    {row.time}
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap">
                    <span
                      className={`px-2 border inline-flex font-semibold rounded-full ${getStatusClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
