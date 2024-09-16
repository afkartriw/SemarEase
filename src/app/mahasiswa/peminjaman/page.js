"use client"; // Marks this as a client component

import React, { useState } from "react";
import Navbar from "@/app/components/Mahasiswa/Navbar";
import Image from "next/image";
import DetailPeminjaman from "@/app/components/Mahasiswa/DetailPeminjaman";
import StatusPeminjaman from "@/app/components/Mahasiswa/StatusPeminjaman";
import Profil from "@/app/components/Mahasiswa/Profil";


const PeminjamanPage = () => {
  const [activeTab, setActiveTab] = useState("Akan Datang");
  const [activeSidebar, setActiveSidebar] = useState("Detail Peminjaman");

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col min-h-screen overflow-hidden bg-custom2">
        <div className="flex pt-32 mx-20 h-[750px]">
          {/* Sidebar */}
          <div className="w-64 border border-blue-300 rounded-lg p-4">
            <ul className="p-4 space-y-4">
              <li className="mb-4">
                <a
                  href="#"
                  onClick={() => {
                    setActiveSidebar("Detail Peminjaman");
                    setActiveTab("Akan Datang"); // Default tab for Detail Peminjaman
                  }}
                  className={`block p-2 rounded-md ${
                    activeSidebar === "Detail Peminjaman"
                      ? "text-blue-600 bg-blue-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Detail Peminjaman
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  onClick={() => {
                    setActiveSidebar("Status Peminjaman");
                    setActiveTab("Akan Datang"); // Default tab for Status Peminjaman
                  }}
                  className={`block p-2 rounded-md ${
                    activeSidebar === "Status Peminjaman"
                      ? "text-blue-600 bg-blue-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Status Peminjaman
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSidebar("Profil");
                    // Optionally, set activeTab for Profil if needed
                  }}
                  className={`block p-2 rounded-md ${
                    activeSidebar === "Profil"
                      ? "text-blue-600 bg-blue-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Profil
                </a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-grow pl-6 pr-8">
              {activeSidebar === "Detail Peminjaman" && (
                <>
                <DetailPeminjaman />
                </>
              )}

              {activeSidebar === "Status Peminjaman" && (
                <>
                <StatusPeminjaman />
                </>
              )}

              {activeSidebar === "Profil" && (
                <>
                <Profil />
                </>
              )}
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default PeminjamanPage;
