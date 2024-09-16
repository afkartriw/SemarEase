"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Mahasiswa/Navbar";
import CalendarDialog from "@/app/components/Mahasiswa/CalendarDialog"; // Impor komponen CalendarDialog

export default function RoomDetails() {
  return (
    <>
      <Navbar />
      <div className="mx-auto shadow-lg rounded-lg p-6 pt-24">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-blue-500">Halaman Utama</a> /
          <a href="#" className="hover:text-blue-500"> Properti Gedung (1)</a> /
          <a href="#" className="hover:text-blue-500"> Properti Ruangan (12)</a> /
          <span className="text-gray-700"> Ruangan Aula FEB</span>
        </div>

        {/* Room Images Section */}
        <div className="flex space-x-4 mb-6 px-8">
          <div className="flex-grow">
            <div className="relative w-full h-full">
              <Image
                src="/images/rr1.png"
                alt="Ruangan Aula FEB"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Image src="/images/r2.png" alt="Image 2" width={340} height={160} className="object-cover" />
            <Image src="/images/r3.png" alt="Image 3" width={340} height={160} className="rounded-lg object-cover" />
            <Image src="/images/r4.png" alt="Image 4" width={340} height={160} className="object-cover" />
            <div className="relative">
              <Image src="/images/r4.png" alt="Image 5" width={340} height={160} className="rounded-lg object-cover" />
              <div className="rounded-lg absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold text-lg cursor-pointer">Lihat Semua Foto</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-10">
          {/* Left Column: Room Information and Terms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Room Information Section */}
            <div className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Ruangan Aula FEB</h2>
              <div className="text-gray-600">
                <p>Gedung: Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
                <p>Lantai: Lantai 1</p>
                <p>Kapasitas: 30</p>
              </div>
            </div>

            {/* Terms and Conditions Section */}
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Syarat & Ketentuan Peminjaman</h3>
              <ul className="list-decimal ml-6 text-gray-700 space-y-2">
                <li>Peminjam wajib menjaga kebersihan dan ketertiban ruangan selama dan setelah penggunaan.</li>
                <li>Kerusakan pada fasilitas ruangan akan menjadi tanggung jawab peminjam.</li>
                <li>Kegiatan harus bersifat akademik, sosial, atau budaya yang mendukung tujuan kampus.</li>
                <li>Peminjam harus mengembalikan ruangan dalam kondisi semula setelah selesai digunakan.</li>
                <li>Dilarang membawa barang-barang berbahaya atau melakukan kegiatan yang mengganggu ketertiban umum.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Facilities and Button */}
          <div className="flex flex-col ">
            {/* Facilities Section */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-xl mb-4">Fasilitas Ruangan</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-700">
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/proyektor.png"
                    alt="Proyektor"
                    className="w-8 h-8 mb-2"
                  />
                  <span>Proyektor</span>
                </li>
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/meja.png"
                    alt="Meja"
                    className="w-8 h-8 mb-2"
                  />
                  <span className="text-gray-400">Meja</span>
                </li>
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/wifi.png"
                    alt="Wifi"
                    className="w-8 h-8 mb-2"
                  />
                  <span>Wifi</span>
                </li>
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/kursi.png"
                    alt="Kursi"
                    className="w-8 h-8 mb-2"
                  />
                  <span className="text-gray-400">Kursi</span>
                </li>
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/panggung.png"
                    alt="Panggung"
                    className="w-8 h-8 mb-2"
                  />
                  <span>Panggung</span>
                </li>
                <li className="flex flex-col items-center">
                  <img
                    src="/images/detail/ac.png"
                    alt="AC"
                    className="w-8 h-8 mb-2"
                  />
                  <span>AC</span>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <CalendarDialog /> {/* Panggil komponen CalendarDialog */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
