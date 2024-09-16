"use client"; // Marks this as a client component

import React, { useState } from "react";
import Image from "next/image";

const DetailPeminjaman = () => {
  const [activeTab, setActiveTab] = useState("Berlangsung");
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCancelClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmCancel = () => {
    // Tambahkan logika untuk membatalkan peminjaman di sini
    setShowModal(false);
    console.log("Peminjaman dibatalkan");
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg">
          <button
            className={`text-lg pb-2 ${
              activeTab === "Berlangsung"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("Berlangsung")}
          >
            Berlangsung
          </button>
          <button
            className={`text-lg pb-2 ${
              activeTab === "selesai"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("selesai")}
          >
            Selesai
          </button>
          <button
            className={`text-lg pb-2 ${
              activeTab === "dibatalkan"
                ? "border-b-2 border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("dibatalkan")}
          >
            Dibatalkan
          </button>
        </div>
      </div>

      {/* Sorting Option */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Urut Berdasarkan :</span>
          <select className="border px-4 py-2 rounded text-gray-700">
            <option>Tanggal Peminjaman</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari ID Peminjaman"
            className="border rounded-lg px-4 py-2 focus:outline-none"
          />
          <span className="absolute right-2 top-2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Konten Berdasarkan Tab Aktif */}
      {activeTab === "Berlangsung" && !showDetails && (
        <div className="flex flex-col items-center">
          <div className="w-100 h-100 flex items-center justify-center">
            <img src="/images/icons/kosong.png" alt="Kosong" />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-600">
            Belum ada peminjaman ruangan yang berlangsung hari ini,{" "}
            <button
              onClick={handleToggleDetails}
              className="text-blue-500 underline"
            >
              tampilan jika ada
            </button>
          </p>
        </div>
      )}

      {activeTab === "Berlangsung" && showDetails && (
        <div className="max-w-6xl w-full pt-2">
          <div className="max-h-[30rem] overflow-y-auto px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="flex items-center bg-blue-100 px-4 py-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-8 4h8m4 0H4v13a2 2 0 002 2h12a2 2 0 002-2V7zm-2 4H6m5 4h5"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Min, 15 Sept 2024
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 border-b border-gray-200 flex justify-between items-center font-bold">
                <span>ID 1204370</span>
                <span className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-lg">
                  Digunakan
                </span>
              </div>
              <div className="flex pl-16 space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/images/rr1.png"
                    alt="Ruangan Aula FEB"
                    className="w-[250px] h-[120px]"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ruangan Aula FEB
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <p className="text-gray-500">Tanggal Digunakan</p>
                      <p className="text-gray-700 font-semibold">
                        15 Sept 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Waktu Mulai - Selesai</p>
                      <p className="text-gray-700 font-semibold">
                        08.00 - 15.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 text-gray-500 border-t border-gray-200 flex justify-between items-center">
                <div className="flex-grow"></div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  onClick={handleCancelClick}
                >
                  Batalkan Peminjaman
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-center text-lg font-semibold text-gray-900 mb-4">
              Batalkan peminjaman?
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Apakah kamu yakin untuk membatalkan peminjaman ruangan ini?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500"
                onClick={handleCloseModal}
              >
                Tidak Jadi
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                onClick={handleConfirmCancel}
              >
                Iya, batalin
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "selesai" && (
        <div className="max-w-6xl w-full pt-2">
          {/* Wrapper yang dapat di-scroll */}
          <div className="max-h-[30rem] overflow-y-auto px-8">
            {/* Div pertama */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="flex items-center bg-blue-100 px-4 py-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-8 4h8m4 0H4v13a2 2 0 002 2h12a2 2 0 002-2V7zm-2 4H6m5 4h5"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Min, 15 Sept 2024
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 border-b border-gray-200 flex justify-between items-center font-bold">
                <span>ID 1204370</span>
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-lg">
                  Selesai
                </span>
              </div>
              <div className="flex pl-16 space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/rr1.png"
                    alt="Ruangan Aula FEB"
                    width={250}
                    height={120}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ruangan Aula FEB
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <p className="text-gray-500">Tanggal Digunakan</p>
                      <p className="text-gray-700 font-semibold">
                        15 Sept 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Waktu Mulai - Selesai</p>
                      <p className="text-gray-700 font-semibold">
                        08.00 - 15.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 text-gray-500 border-t border-gray-200 flex justify-between items-center">
                <div className="flex-grow"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Pinjam Lagi
                </button>
              </div>
            </div>

            {/* Div kedua yang telah diperbarui */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="flex items-center bg-blue-100 px-4 py-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-8 4h8m4 0H4v13a2 2 0 002 2h12a2 2 0 002-2V7zm-2 4H6m5 4h5"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Sen, 16 Sept 2024
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 border-b border-gray-200 flex justify-between items-center font-bold">
                <span>ID 1204371</span>
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-lg">
                  Selesai
                </span>
              </div>
              <div className="flex pl-16 space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/rr1.png"
                    alt="Ruangan Seminar"
                    width={250}
                    height={120}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ruangan Seminar
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <p className="text-gray-500">Tanggal Digunakan</p>
                      <p className="text-gray-700 font-semibold">
                        16 Sept 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Waktu Mulai - Selesai</p>
                      <p className="text-gray-700 font-semibold">
                        10.00 - 17.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 text-gray-500 border-t border-gray-200 flex justify-between items-center">
                <div className="flex-grow"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Pinjam Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "dibatalkan" && (
        <div className="max-w-6xl w-full pt-2">
          {/* Wrapper yang dapat di-scroll */}
          <div className="max-h-[30rem] overflow-y-auto px-8">
            {/* Div pertama */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="flex items-center bg-blue-100 px-4 py-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-8 4h8m4 0H4v13a2 2 0 002 2h12a2 2 0 002-2V7zm-2 4H6m5 4h5"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Min, 15 Sept 2024
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 border-b border-gray-200 flex justify-between items-center font-bold">
                <span>ID 1204370</span>
                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-lg">
                  Dibatalkan
                </span>
              </div>
              <div className="flex pl-16 space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/rr1.png"
                    alt="Ruangan Aula FEB"
                    width={250}
                    height={120}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ruangan Aula FEB
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <p className="text-gray-500">Tanggal Digunakan</p>
                      <p className="text-gray-700 font-semibold">
                        15 Sept 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Waktu Mulai - Selesai</p>
                      <p className="text-gray-700 font-semibold">
                        08.00 - 15.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 text-gray-500 border-t border-gray-200 flex justify-between items-center">
                <div className="flex-grow"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Pinjam Lagi
                </button>
              </div>
            </div>

            {/* Div kedua yang telah diperbarui */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="flex items-center bg-blue-100 px-4 py-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-8 4h8m4 0H4v13a2 2 0 002 2h12a2 2 0 002-2V7zm-2 4H6m5 4h5"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Sen, 16 Sept 2024
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 border-b border-gray-200 flex justify-between items-center font-bold">
                <span>ID 1204371</span>
                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-lg">
                  Dibatalkan
                </span>
              </div>
              <div className="flex pl-16 space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/rr1.png"
                    alt="Ruangan Seminar"
                    width={250}
                    height={120}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ruangan Seminar
                  </h2>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <p className="text-gray-500">Tanggal Digunakan</p>
                      <p className="text-gray-700 font-semibold">
                        16 Sept 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Waktu Mulai - Selesai</p>
                      <p className="text-gray-700 font-semibold">
                        10.00 - 17.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 text-gray-500 border-t border-gray-200 flex justify-between items-center">
                <div className="flex-grow"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Pinjam Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPeminjaman;
