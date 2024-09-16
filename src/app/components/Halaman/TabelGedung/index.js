"use client"; // Marks this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const TabelGedung = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const router = useRouter();
  const pathname = usePathname();

  // Determine base path based on the current pathname
  const basePath = pathname.includes('/admin') ? '/admin' : '/operator';

  // Function to handle the "Tambah Gedung" button click
  const handleAddGedung = () => {
    const addGedungUrl = `${basePath}/gedung/tambah`;
    router.push(addGedungUrl);
  };

  const handleDetailClick = (id) => {
    router.push(`${basePath}/gedung/detail/`);
  };

  const handleEditClick = (id) => {
    router.push(`${basePath}/gedung/ubah/`);
  };

  const gedungData = [
    {
      id: 1,
      nama: "Gedung FKIP",
      lokasi: "Link",
      gambar: "logo.jpg",
      operator: "Operator 1",
      keterangan:
        "Fakultas Keguruan dan Ilmu Pendidikan (FKIP) UNS merupakan fakultas terbesar di UNS dengan program sarjana mencakup 24 jurusan.",
    },
    {
      id: 2,
      nama: "Gedung Vokasi",
      lokasi: "Link",
      gambar: "logo.jpg",
      operator: "Operator 2",
      keterangan: "Fakultas Vokasi UNS merupakan fakultas terbesar di UNS.",
    },
    // Data gedung lainnya...
  ];

  return (
    <>
      <div className="mt-24 ml-80 mr-10">
        <div className="container mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex flex-col items-start mb-4">
            <div className="pb-2 border-b border-gray-300 w-full">
              <h2 className="text-lg font-semibold">TABEL GEDUNG</h2>
            </div>

            <div className="py-2 border-b border-gray-300 w-full">
              <button
                onClick={handleAddGedung}
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
              >
                Tambah Gedung
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
                <th className="border px-4 py-2 w-40">Nama Gedung</th>
                <th className="border px-4 py-2">Gambar</th>
                <th className="border px-4 py-2">Keterangan</th>
                <th className="border px-4 py-2 w-40">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {gedungData
                .filter(
                  (gedung) =>
                    gedung.nama.toLowerCase().includes(search.toLowerCase()) ||
                    gedung.gambar
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    gedung.keterangan
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )
                .map((gedung) => (
                  <tr key={gedung.id}>
                    <td className="border px-4 py-2">{gedung.id}</td>
                    <td className="border px-4 py-2">{gedung.nama}</td>
                    <td className="border px-4 py-2">{gedung.gambar}</td>
                    <td className="border px-4 py-2">{gedung.keterangan}</td>
                    <td className="border px-6 py-2">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDetailClick(gedung.id)}
                          className="inline-block"
                        >
                          <img
                            src="/images/icons/detail.png"
                            alt="Detail"
                            className="w-8 h-8 rounded hover:opacity-80"
                          />
                        </button>
                        <button
                          onClick={() => handleEditClick(gedung.id)}
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
              Showing 1 to {gedungData.length} of {gedungData.length} entries
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

export default TabelGedung;
