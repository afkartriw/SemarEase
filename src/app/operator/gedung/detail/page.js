"use client"; // Ensure this is at the top

import React from "react";
import Navbar from "../../../components/Operator/Navbar";
import { useRouter } from 'next/navigation'; // Updated import

const DetailGedung = () => {
  const router = useRouter(); // Use router from next/navigation

  // Sample data (in practice, fetch this from an API or pass as props)
  const gedung = {
    idGedung: "G001",
    alamatGedung: "Jl. Contoh No.1, Jakarta",
    namaGedung: "Gedung Utama",
    fasilitas: "Wi-Fi, AC, Proyektor",
    deskripsi: "Gedung utama dengan fasilitas lengkap dan lokasi strategis.",
    jamOperasional: "08:00 - 17:00",
    gambarGedung: "/images/gedung.jpg",
    lokasiGedung: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31783.552249315646!2d-122.40641770949634!3d37.78514464995245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e8d028af87%3A0xf070a08d8328eec5!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1633619696315!5m2!1sen!2sus"
  };

  const handleBack = () => {
    router.push('/operator/gedung');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">DETAIL GEDUNG</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ID Gedung */}
            <div>
              <label className="block text-gray-700 font-bold">ID Gedung</label>
              <input
                type="text"
                value={gedung.idGedung}
                readOnly
                className="w-full px-4 py-2 mt-2 "
              />
            </div>

            {/* Alamat Gedung */}
            <div>
              <label className="block text-gray-700 font-bold">Alamat Gedung</label>
              <input
                type="text"
                value={gedung.alamatGedung}
                readOnly
                className="w-full px-4 py-2 mt-2 "
              />
            </div>

            {/* Nama Gedung */}
            <div>
              <label className="block text-gray-700 font-bold">Nama Gedung</label>
              <input
                type="text"
                value={gedung.namaGedung}
                readOnly
                className="w-full px-4 py-2 mt-2 "
              />
            </div>

            {/* Fasilitas Gedung */}
            <div>
              <label className="block text-gray-700 font-bold">Fasilitas Gedung</label>
              <input
                type="text"
                value={gedung.fasilitas}
                readOnly
                className="w-full px-4 py-2 mt-2 "
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-gray-700 font-bold">Deskripsi</label>
              <textarea
                value={gedung.deskripsi}
                readOnly
                className="w-full px-4 py-2 mt-2 "
                rows="3"
              />
            </div>

            {/* Jam Buka-Tutup */}
            <div>
              <label className="block text-gray-700 font-bold">Jam Buka-Tutup</label>
              <input
                type="text"
                value={gedung.jamOperasional}
                readOnly
                className="w-full px-4 py-2 mt-2 "
              />
            </div>

            {/* Gambar Gedung */}
            <div>
              <label className="block text-gray-700 font-bold">Gambar Gedung</label>
              <img
                src={gedung.gambarGedung}
                alt="Gambar Gedung"
                className="w-full border rounded-lg mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Ukuran file maks 2MB. Format: .jpg, .png, .jpeg
              </p>
            </div>

            {/* Lokasi Gedung (Map Image) */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Lokasi Gedung</label>
              <iframe
                src={gedung.lokasiGedung}
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

export default DetailGedung;
