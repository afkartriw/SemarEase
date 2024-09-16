"use client"; // Marks this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const TabelRuangan = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const router = useRouter();
  const pathname = usePathname();

  // Determine base path based on the current pathname
  const basePath = pathname.includes('/admin') ? '/admin' : '/operator';

  // Function to handle the "Tambah Ruangan" button click
  const handleAddRuangan = () => {
    const addRuanganUrl = `${basePath}/ruangan/tambah`;
    router.push(addRuanganUrl);
  };

  const handleDetailClick = (id) => {
    router.push(`${basePath}/ruangan/detail/`);
  };

  const handleEditClick = (id) => {
    router.push(`${basePath}/ruangan/ubah/`);
  };

  const ruanganData = [
    {
      id: 1,
      nama: "Ruangan FKIP",
      gedung: "Gedung FKIP",
      lantai: "1",
      kapasitas: "30",
    },
    {
      id: 2,
      nama: "Ruangan Vokasi",
      gedung: "Gedung Vokasi",
      lantai: "2",
      kapasitas: "20",
    },
    // Data ruangan lainnya...
  ];

  return (
    <>
      <div className="mt-24 ml-80 mr-10">
        <div className="container mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex flex-col items-start mb-4">
            <div className="pb-2 border-b border-gray-300 w-full">
              <h2 className="text-lg font-semibold">TABEL RUANGAN</h2>
            </div>
            <div className="py-2 border-b border-gray-300 w-full">
              <button
                onClick={handleAddRuangan}
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
              >
                Tambah Ruangan
              </button>
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
                <th className="border px-4 py-2 w-40">Nama Ruangan</th>
                <th className="border px-4 py-2">Gedung</th>
                <th className="border px-4 py-2 w-50">Lantai</th>
                <th className="border px-4 py-2">Kapasitas</th>
                <th className="border px-4 py-2 w-40">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {ruanganData
                .filter(
                  (ruangan) =>
                    ruangan.nama.toLowerCase().includes(search.toLowerCase()) ||
                    ruangan.lantai
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    ruangan.kapasitas
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    ruangan.gedung.toLowerCase().includes(search.toLowerCase())
                )
                .map((ruangan) => (
                  <tr key={ruangan.id}>
                    <td className="border px-4 py-2">{ruangan.id}</td>
                    <td className="border px-4 py-2">{ruangan.nama}</td>
                    <td className="border px-4 py-2">{ruangan.gedung}</td>
                    <td className="border px-4 py-2">{ruangan.lantai}</td>
                    <td className="border px-4 py-2">{ruangan.kapasitas}</td>
                    <td className="border px-6 py-2">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDetailClick(ruangan.id)}
                          className="inline-block"
                        >
                          <img
                            src="/images/icons/detail.png"
                            alt="Detail"
                            className="w-8 h-8 rounded hover:opacity-80"
                          />
                        </button>
                        <button
                          onClick={() => handleEditClick(ruangan.id)}
                          className="inline-block"
                        >
                          <img
                            src="/images/icons/ubah.png"
                            alt="Ubah"
                            className="w-8 h-8 rounded hover:opacity-80"
                          />
                        </button>
                        <button
                          // Add functionality for "Hapus" if needed
                          className="inline-block"
                        >
                          <img
                            src="/images/icons/hapus.png"
                            alt="Hapus"
                            className="w-8 h-8 rounded hover:opacity-80"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span>
              Showing 1 to {ruanganData.length} of {ruanganData.length} entries
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

export default TabelRuangan;
