"use client"; // Ensure this is at the top

import React from "react";
import Navbar from "../../../components/Admin/Navbar";
import { useRouter } from 'next/navigation'; // Updated import

const TambahOperator = () => {
  const router = useRouter(); // Use router from next/navigation

  const handleCancel = () => {
    router.push('/admin/operator');
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to handle form submission goes here
    console.log("Operator added");
    router.push('/admin/operator'); // Redirect after saving
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">TAMBAH OPERATOR</h1>
          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Operator */}
              <div>
                <label className="block text-gray-700">ID Operator</label>
                <input
                  type="text"
                  name="idOperator"
                  placeholder="Masukkan ID Operator"
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Operator */}
              <div>
                <label className="block text-gray-700">Email Operator</label>
                <input
                  type="email"
                  name="emailOperator"
                  placeholder="Masukkan email operator"
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Nama Operator */}
              <div>
                <label className="block text-gray-700">Nama Operator</label>
                <input
                  type="text"
                  name="namaOperator"
                  placeholder="Masukkan nama operator"
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
                  <option value="FEB">Gedung FEB</option>
                </select>
              </div>

              {/* No. Telp */}
              <div>
                <label className="block text-gray-700">No. Telp</label>
                <input
                  type="tel"
                  name="noTelp"
                  placeholder="Masukkan nomor telepon"
                  className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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

export default TambahOperator;
