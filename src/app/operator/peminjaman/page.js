"use client";

import Sidebar from "../../components/Operator/Sidebar";
import Navbar from "../../components/Operator/Navbar";

import { useState } from "react";

const TabelRuangan = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  const peminjamanData = [
    {
      id: 13326,
      email: "Igbalganteng@gmail.com",
      tanggal: "10/04/2024",
      waktu: "10.00 - 13.00",
      ruangan: "ruangan 20",
    },
    {
      id: 22237,
      email: "najjwawa@gmail.com",
      tanggal: "10/04/2024",
      waktu: "00.00 - 10.00",
      ruangan: "ruangan 30",
    },
    // Data ruangan lainnya...
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-24 ml-80 mr-10">
        <div className="container mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex flex-col items-start mb-4">
            <div className="pb-2 border-b border-gray-300 w-full">
              <h2 className="text-lg font-semibold">TABEL PEMINJAMAN</h2>
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
              {/* Biru muda */}
              <tr>
                <th className="border px-4 py-2">ID Peminjaman</th>
                <th className="border px-4 py-2 w-40">Email</th>
                <th className="border px-4 py-2">Tanggal</th>
                <th className="border px-4 py-2">Waktu Mulai-Selesai</th>
                <th className="border px-4 py-2">Ruangan</th>
                <th className="border px-4 py-2 w-40">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {peminjamanData
                .filter(
                  (ruangan) =>
                    ruangan.email.toLowerCase().includes(search.toLowerCase()) ||
                    ruangan.tanggal
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    ruangan.waktu
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    ruangan.ruangan.toLowerCase().includes(search.toLowerCase())
                )
                .map((ruangan) => (
                  <tr key={ruangan.id}>
                    <td className="border px-4 py-2">{ruangan.id}</td>
                    <td className="border px-4 py-2">{ruangan.email}</td>
                    <td className="border px-4 py-2">{ruangan.tanggal}</td>
                    <td className="border px-4 py-2">{ruangan.waktu}</td>
                    <td className="border px-4 py-2">{ruangan.ruangan}</td>
                    <td className="border px-2 py-2">
                      <div className="flex space-x-1 items-center justify-center">
                        <a
                          href="/detail"
                          className="inline-flex items-center justify-center bg-gray-800  rounded-lg hover:bg-gray-700"
                        >
                          <img
                            src="/images/icons/detail.png" // Ganti dengan path gambar yang sesuai
                            alt="Detail"
                            className="w-10 h-10 text-white"
                          />
                        </a>

                        <a
                          href="/detail"
                          className="inline-flex items-center justify-center bg-green-500 rounded-lg hover:bg-green-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-white"
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
                        </a>

                        <a
                          href="/detail"
                          className="inline-flex items-center justify-center bg-red-500 rounded-lg hover:bg-red-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span>
              Showing 1 to {peminjamanData.length} of {peminjamanData.length} entries
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
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default TabelRuangan;
