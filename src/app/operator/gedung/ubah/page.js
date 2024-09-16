"use client"; // Ensure this is at the top

import React, { useState } from "react";
import Navbar from "../../../components/Operator/Navbar";
import { useRouter } from "next/navigation"; // Updated import

const EditGedung = () => {
  const router = useRouter(); // Use router from next/navigation

  // Sample data (replace this with data fetched from an API or context)
  const [gedungData, setGedungData] = useState({
    idGedung: "G001",
    alamatGedung: "Jl. Contoh No. 123",
    namaGedung: "Gedung Contoh",
    fasilitas: "AC, Wi-Fi, Proyektor",
    deskripsi: "Gedung ini dilengkapi dengan fasilitas modern dan ruang serbaguna.",
    jamOperasional: "08:00 - 17:00",
    gambarGedung: "/images/gedung-contoh.jpg",
  });

  const handleCancel = () => {
    router.push('/operator/gedung');
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to save updated data goes here
    // For example: API call to update gedung data
    console.log("Data saved:", gedungData);
    router.push('/operator/gedung'); // Redirect after saving
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setGedungData({
      ...gedungData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">EDIT GEDUNG</h1>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Gedung */}
              <div>
                <label className="block text-gray-700">ID Gedung</label>
                <input
                  type="text"
                  name="idGedung"
                  value={gedungData.idGedung}
                  readOnly
                  className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100"
                />
              </div>

              {/* Alamat Gedung */}
              <div>
                <label className="block text-gray-700">Alamat Gedung</label>
                <input
                  type="text"
                  name="alamatGedung"
                  value={gedungData.alamatGedung}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Nama Gedung */}
              <div>
                <label className="block text-gray-700">Nama Gedung</label>
                <input
                  type="text"
                  name="namaGedung"
                  value={gedungData.namaGedung}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Fasilitas Gedung */}
              <div>
                <label className="block text-gray-700">Fasilitas Gedung</label>
                <input
                  type="text"
                  name="fasilitas"
                  value={gedungData.fasilitas}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-gray-700">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  value={gedungData.deskripsi}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              {/* Jam Buka-Tutup */}
              <div>
                <label className="block text-gray-700">Jam Buka-Tutup</label>
                <input
                  type="text"
                  name="jamOperasional"
                  value={gedungData.jamOperasional}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gambar Gedung */}
              <div>
                <label className="block text-gray-700">Gambar</label>
                <input
                  type="file"
                  name="gambarGedung"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none"
                />
                {gedungData.gambarGedung && (
                  <img
                    // src={URL.createObjectURL(gedungData.gambarGedung)}
                    alt="Gambar Gedung"
                    className="w-full mt-2 border rounded-lg"
                  />
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Ukuran file maks 2MB. Format: .jpg, .png, .jpeg
                </p>
              </div>

              {/* Lokasi Gedung (Map Image) */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Lokasi Gedung
                </label>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31783.552249315646!2d-122.40641770949634!3d37.78514464995245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e8d028af87%3A0xf070a08d8328eec5!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1633619696315!5m2!1sen!2sus"
                  width="500"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Lokasi Gedung"
                ></iframe>
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

export default EditGedung;
