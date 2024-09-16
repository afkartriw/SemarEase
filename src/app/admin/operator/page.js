"use client";

import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";
import { useRouter } from "next/navigation"; // Make sure this is imported
import { useState } from "react";

const TabelOperator = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  // Tambahkan status checked untuk setiap operator
  const [statusChecked, setStatusChecked] = useState({
    1: true,
    2: true,
  });

  const router = useRouter(); // Initialize router here

  const operatorData = [
    {
      id: 1,
      nama: "Iqbal Farhan",
      notelp: "081234567",
      email: "igbalganteng@gmail.com",
      gedung: "Gedung Vokasi",
    },
    {
      id: 2,
      nama: "Shafa Najwa",
      notelp: "081234567",
      email: "najshaff@gmail.com",
      gedung: "Gedung FKOR",
    },
    // Data operator lainnya...
  ];

  // Toggle untuk mengubah status checked
  const handleDetailClick = (id) => {
    router.push(`/admin/operator/detail/`); // Ensure to pass the correct ID
  };

  const toggleStatus = (id) => {
    setStatusChecked((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-24 ml-80 mr-10">
        <div className="container mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex flex-col items-start mb-4">
            <div className="pb-2 border-b border-gray-300 w-full">
              <h2 className="text-lg font-semibold">TABEL OPERATOR</h2>
            </div>
            <div className="py-2 border-b border-gray-300 w-full">
              <a href="/admin/operator/tambah">
                <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                  Tambah Operator
                </button>
              </a>
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
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2 w-50">Email</th>
                <th className="border px-4 py-2 w-40">Nama</th>
                <th className="border px-4 py-2">Gedung</th>
                <th className="border px-4 py-2">No.Telp Operator</th>
                <th className="border px-4 py-2 ">Aksi</th>
                <th className="border px-4 py-2 ">Status</th>
              </tr>
            </thead>

            <tbody>
              {operatorData
                .filter(
                  (operator) =>
                    operator.nama
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    operator.notelp
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    operator.email
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    operator.gedung.toLowerCase().includes(search.toLowerCase())
                )

                .map((operator) => (
                  <tr key={operator.id}>
                    <td className="border px-4 py-2">{operator.id}</td>
                    <td className="border px-4 py-2">{operator.email}</td>
                    <td className="border px-4 py-2">{operator.nama}</td>
                    <td className="border px-4 py-2">{operator.gedung}</td>
                    <td className="border px-4 py-2">{operator.notelp}</td>
                    <td className="border px-6 py-2">
                      <div className="flex space-x-2 justify-center">
                        <button
                          onClick={() => handleDetailClick(operator.id)}
                          className="inline-block"
                        >
                          <img
                            src="/images/icons/detail.png"
                            alt="Detail"
                            className="w-8 h-8 rounded hover:opacity-80"
                          />
                        </button>
                      </div>
                    </td>
                    <td className="border px-4 py-2 justify-center">
                      <div className="flex space-x-2 justify-center">
                        {/* Tombol status */}
                        <button
                          onClick={() => toggleStatus(operator.id)}
                          className={`w-8 h-8 rounded ${
                            statusChecked[operator.id]
                              ? "bg-blue-500 text-white"
                              : "bg-white border border-gray-300"
                          } flex items-center justify-center`}
                        >
                          {statusChecked[operator.id] && (
                            <span>&#10003;</span> // Centang
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span>
              Showing 1 to {operatorData.length} of {operatorData.length} entries
            </span>
            <div className="flex space-x-1">
              <button className="bg-gray-300 text-gray-600 px-2 py-1 rounded">
                Prev
              </button>
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                1
              </button>
              <button className="bg-gray-300 text-gray-600 px-2 py-1 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabelOperator;
