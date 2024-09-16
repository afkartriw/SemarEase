"use client"; // Ensure this is at the top

import React from "react";
import Navbar from "../../../components/Admin/Navbar";
import { useRouter } from 'next/navigation'; // Updated import

const DetailOperator = () => {
  const router = useRouter(); // Use router from next/navigation

  // Simulated operator data
  const operator = {
    idOperator: '12345',
    emailOperator: 'operator@example.com',
    namaOperator: 'John Doe',
    gedung: 'Vokasi',
    noTelp: '081234567890'
  };

  const handleEdit = () => {
    router.push('/admin/operator/edit'); // Redirect to an edit page or another relevant page
  };

  const handleBack = () => {
    router.push('/admin/operator');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto my-24">
          <h1 className="text-2xl font-bold mb-4">DETAIL OPERATOR</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ID Operator */}
            <div>
              <label className="block text-gray-700">ID Operator</label>
              <p className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100">{operator.idOperator}</p>
            </div>

            {/* Email Operator */}
            <div>
              <label className="block text-gray-700">Email Operator</label>
              <p className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100">{operator.emailOperator}</p>
            </div>

            {/* Nama Operator */}
            <div>
              <label className="block text-gray-700">Nama Operator</label>
              <p className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100">{operator.namaOperator}</p>
            </div>

            {/* Gedung */}
            <div>
              <label className="block text-gray-700">Gedung</label>
              <p className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100">{operator.gedung}</p>
            </div>

            {/* No. Telp */}
            <div>
              <label className="block text-gray-700">No. Telp</label>
              <p className="w-full border rounded-lg px-4 py-2 mt-2 bg-gray-100">{operator.noTelp}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailOperator;
