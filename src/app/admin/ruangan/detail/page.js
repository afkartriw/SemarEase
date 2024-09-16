"use client"; // Ensure this is at the top

import React from "react";
import Navbar from "../../../components/Admin/Navbar";
import { useRouter } from "next/navigation"; // Updated import

const DetailRuangan = () => {
  const router = useRouter(); // Use router from next/navigation

  // Sample data (in practice, fetch this from an API or pass as props)
  const ruangan = {
    idRuangan: "R001",
    gedung: "Gedung Vokasi",
    namaRuangan: "Ruangan A",
    lantai: "2",
    kapasitas: "50",
    deskripsi: "Ruangan serbaguna dengan fasilitas multimedia.",
    fasilitas: "AC, Proyektor, Whiteboard",
    gambarRuangan: "/images/ruangan.jpg",
  };

  const handleBack = () => {
    router.push("/admin/ruangan");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">DETAIL RUANGAN</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ID Ruangan */}
            <div>
              <label className="block text-gray-700">ID Ruangan</label>
              <input
                type="text"
                value={ruangan.idRuangan}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Gedung */}
            <div>
              <label className="block text-gray-700">Gedung</label>
              <input
                type="text"
                value={ruangan.gedung}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Nama Ruangan */}
            <div>
              <label className="block text-gray-700">Nama Ruangan</label>
              <input
                type="text"
                value={ruangan.namaRuangan}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Lantai Ruangan */}
            <div>
              <label className="block text-gray-700">Lantai Ruangan</label>
              <input
                type="text"
                value={ruangan.lantai}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Kapasitas */}
            <div>
              <label className="block text-gray-700">Kapasitas</label>
              <input
                type="text"
                value={ruangan.kapasitas}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-gray-700">Deskripsi</label>
              <textarea
                value={ruangan.deskripsi}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
                rows="3"
              />
            </div>

            {/* Fasilitas Ruangan */}
            <div>
              <label className="block text-gray-700">Fasilitas Ruangan</label>
              <input
                type="text"
                value={ruangan.fasilitas}
                readOnly
                className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
              />
            </div>

            {/* Gambar Ruangan */}
            <div>
              <label className="block text-gray-700">Gambar Ruangan</label>
              <img
                src={ruangan.gambarRuangan}
                alt="Gambar Ruangan"
                className="w-full border rounded-lg mt-2"
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
              onClick={handleBack}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailRuangan;
