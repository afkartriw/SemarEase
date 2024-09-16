"use client"; // Ensure this is at the top

import React, { useState } from "react";
import Navbar from "../../../components/Admin/Navbar";
import { useRouter } from "next/navigation"; // Updated import

const EditRuangan = () => {
  const router = useRouter(); // Use router from next/navigation

  // Sample data (replace this with data fetched from an API or context)
  const [ruanganData, setRuanganData] = useState({
    idRuangan: "R001",
    gedung: "Vokasi",
    namaRuangan: "Ruang Contoh",
    lantai: "2",
    kapasitas: "50",
    deskripsi: "Ruang ini dilengkapi dengan fasilitas multimedia.",
    fasilitas: "AC, Proyektor, Whiteboard",
    gambarRuangan: "/images/ruang-contoh.jpg",
  });

  const handleCancel = () => {
    router.push("/admin/ruangan");
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to save updated data goes here
    // For example: API call to update ruangan data
    console.log("Data saved:", ruanganData);
    router.push("/admin/ruangan"); // Redirect after saving
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setRuanganData({
      ...ruanganData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">UBAH RUANGAN</h1>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Ruangan */}
              <div>
                <label className="block text-gray-700">ID Ruangan</label>
                <input
                  type="text"
                  name="idRuangan"
                  value={ruanganData.idRuangan}
                  readOnly
                  className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
                />
              </div>

              {/* Gedung */}
              <div>
                <label className="block text-gray-700">Gedung</label>
                <select
                  name="gedung"
                  value={ruanganData.gedung}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Vokasi">Gedung Vokasi</option>
                  <option value="FKIP">Gedung FKIP</option>
                  <option value="FKOR">Gedung FKOR</option>
                  <option value="FEB">Gedung FEB</option>
                </select>
              </div>

              {/* Nama Ruangan */}
              <div>
                <label className="block text-gray-700">Nama Ruangan</label>
                <input
                  type="text"
                  name="namaRuangan"
                  value={ruanganData.namaRuangan}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Lantai Ruangan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Lantai Ruangan</label>
                  <input
                    type="text"
                    name="lantai"
                    value={ruanganData.lantai}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Kapasitas</label>
                  <input
                    type="text"
                    name="kapasitas"
                    value={ruanganData.kapasitas}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-gray-700">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  value={ruanganData.deskripsi}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              {/* Fasilitas Ruangan */}
              <div>
                <label className="block text-gray-700">Fasilitas Ruangan</label>
                <input
                  type="text"
                  name="fasilitas"
                  value={ruanganData.fasilitas}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gambar Ruangan */}
              <div>
                <label className="block text-gray-700">Gambar</label>
                <input
                  type="file"
                  name="gambarRuangan"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none"
                />
                {ruanganData.gambarRuangan && (
                  <img
                    // src={URL.createObjectURL(ruanganData.gambarRuangan)}
                    alt="Gambar Ruangan"
                    className="w-full mt-2 border rounded-lg"
                  />
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Ukuran file maks 2MB. Format: .jpg, .png, .jpeg
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Batalkan
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditRuangan;
