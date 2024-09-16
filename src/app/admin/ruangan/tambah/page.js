"use client"; // Ensure this is at the top

import React from "react";
import Navbar from "../../../components/Admin/Navbar";
import { useRouter } from "next/navigation"; // Updated import

const TambahRuangan = () => {
  const router = useRouter(); // Use router from next/navigation

  const handleCancel = () => {
    router.push("/admin/ruangan");
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // No action needed for "Tambahkan" button
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">TAMBAH RUANGAN</h1>
          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Ruangan */}
              <div>
                <label className="block text-gray-700">ID Ruangan</label>
                <input
                  type="text"
                  name="idRuangan"
                  placeholder="Masukkan ID Ruangan"
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gedung */}
              <div>
                <label className="block text-gray-700">Gedung</label>
                <select
                  name="gedung"
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
                  placeholder="Masukkan nama ruangan"
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
                    placeholder="Lantai ke-"
                    className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Kapasitas</label>{" "}
                  {/* Kapasitas */}
                  <input
                    type="text"
                    name="Kapasitas"
                    placeholder="Kapasitas"
                    className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-gray-700">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  placeholder="Masukkan deskripsi ruangan"
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
                  placeholder="Masukkan fasilitas ruangan"
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
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none"
                />
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
                Tambahkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TambahRuangan;
