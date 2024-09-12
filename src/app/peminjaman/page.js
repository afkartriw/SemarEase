import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import React from 'react';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-blue-50 min-h-screen flex justify-center mt-20">
      <div className="w-full max-w-5xl mx-auto p-6">
        
        {/* Flex Container untuk membuat layout kiri dan kanan */}
        <div className="flex justify-between space-x-6">
          
          {/* Bagian Kiri */}
          <div className="flex flex-col items-start w-1/3">
            <h1 className="text-2xl font-semibold mb-4">Peminjaman Belum Ada</h1>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
              Detail Peminjaman
            </button>
          </div>

          {/* Bagian Kanan */}
          <div className="flex flex-col w-2/3 space-y-4">
            
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                <span className="font-semibold">Akses semua pinjaman Anda di SemarEase dengan mudah.</span>
                <br />
                Login ke akun SemarEase Anda untuk melihat pinjaman Anda yang masih aktif dan yang sudah lewat, serta untuk mengelola pinjaman Anda (misalnya penjadwalan ulang atau perpanjangan masa peminjaman).
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white">
              <p className="font-semibold">Tidak Ada Pemesanan yang Belum Selesai</p>
              <p>Jika Anda tidak dapat menyelesaikan proses peminjaman.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
