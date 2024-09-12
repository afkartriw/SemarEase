"use client";

import Sidebar from "../components/Sidebar";
import NavDas from "../components/NavDas";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <NavDas />

        <div className="flex-1 p-10 ml-80 mt-16">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Jumlah Peminjam Setiap Bulan
          </h1>

          <div className="grid grid-cols-2 gap-6 my-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">23 Ruangan</h2>
              <p className="text-gray-500">23 Verified</p>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">12 Tim</h2>
              <p className="text-gray-500">Semua Lomba</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">6 Pesan</h2>
              <p className="text-gray-500">3 Pesan Belum di Buka</p>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">10 Akun Operator</h2>
              <p className="text-gray-500">2 Akun Admin</p>
            </div>
          </div>

          {/* Chart area */}
          <div className="w-full h-85 bg-white rounded-lg shadow-md mb-10">
            <Chart />
          </div>
          {/* Chart component can be added here */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;