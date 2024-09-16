"use client";

import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../components/Admin/Sidebar";
import Navbar from "../components/Admin/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi chart.js komponen
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartRef = useRef(null);

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, "rgba(54, 162, 235, 0.1)"); // Light blue at the top
    gradient.addColorStop(1, "rgba(54, 162, 235, 1)"); // Dark blue at the bottom
    return gradient;
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Jumlah Peminjaman",
        data: [100, 150, 200, 250, 300, 350, 100, 50, 150, 300, 400, 450],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens when chart has not been rendered yet
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 10, // Rounded bars
        borderSkipped: false, // Make sure the bars are rounded on all sides
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      title: {
        display: false, // No title needed
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, // Adjust step size for better scale readability
        },
      },
    },
  };

  return (
    <>
      <div className="ml-64 pt-24 pl-16 pr-4 bg-gray-100 min-h-screen">
        <Navbar />
        <Sidebar />
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Halo Admin!</h1>
            <p className="text-gray-600">Lihat dan kontrol statistik laporan</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Icon Notifikasi (Lonceng) */}
            <button className="flex items-center justify-center w-10 h-10">
              <img src="/images/icons/notif.png" alt="Notifikasi" />
            </button>

            {/* Tombol Pencarian */}
            <div>
              <input
                type="text"
                placeholder="Cari"
                className="border rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-l-4 border-blue-600 hover:shadow-lg transition duration-200">
            <div className="flex items-center">
              <p className="text-2xl text-blue-600 font-bold m-0">12</p>
              <h2 className="text-lg font-semibold text-gray-800 m-0 ml-4">
                Jumlah Ruangan
              </h2>
            </div>
            <p className="text-gray-600">5 Peminjaman</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-l-4 border-blue-600 hover:shadow-lg transition duration-200">
            <div className="flex items-center">
              <p className="text-2xl text-blue-600 font-bold m-0">1</p>
              <h2 className="text-lg font-semibold text-gray-800 m-0 ml-4">
                Jumlah Gedung
              </h2>
            </div>
            <p className="text-gray-600">XXXXXXXX</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-l-4 border-blue-600 hover:shadow-lg transition duration-200">
            <div className="flex items-center">
              <p className="text-2xl text-blue-600 font-bold m-0">2</p>
              <h2 className="text-lg font-semibold text-gray-800 m-0 ml-4">
                Akun Administrator
              </h2>
            </div>
            <div className="flex flex-col text-gray-600">
              <p className="mb-1">1 Akun Admin</p>
              <p>1 Akun Operator</p>
            </div>
          </div>
        </div>

        {/* Wrapper untuk Grafik dan Histori */}
        <div className="flex space-x-6">
          {/* Grafik */}
          <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
            {/* Lebar 2/3 untuk diagram */}
            <h1 className="text-lg font-semibold text-center text-gray-800 mb-4">
              Jumlah Peminjaman Setiap Bulan
            </h1>
            <div className="flex justify-center h-[300px]">
              {" "}
              {/* Flexbox untuk memastikan diagram di tengah */}
              <Bar
                data={data}
                options={options}
                ref={chartRef}
                style={{ width: "100%" }}
              />{" "}
              {/* Lebar penuh */}
            </div>
          </div>
          {/* Histori */}
          <div className="w-1/3 bg-white shadow-md rounded-lg p-6 border-t-4 border-l-4 border-blue-600">
            {/* Lebar 1/3 untuk histori */}
            <h3 className="text-lg font-bold mb-4 border-b-2">Histori</h3>
            <div className="space-y-4">
              <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                  <p className="font-semibold text-sm">
                    shafath.m@students.uns.ac.id
                  </p>
                  <p className="text-sm">Nama Ruangan: Ruang Guru</p>
                  <p className="text-sm">Tanggal: 13/05/22 | 08.00-12.00</p>
                </div>
                <span className="text-yellow-500 font-semibold">Digunakan</span>
              </div>
              {/* Tambahkan item histori lain jika diperlukan */}
              <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                  <p className="font-semibold text-sm">
                    shafath.m@students.uns.ac.id
                  </p>
                  <p className="text-sm">Nama Ruangan: Ruang Guru</p>
                  <p className="text-sm">Tanggal: 13/05/22 | 08.00-12.00</p>
                </div>
                <span className="text-red-500 font-semibold">Dibatalkan</span>
              </div>
              <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                  <p className="font-semibold text-sm">
                    shafath.m@students.uns.ac.id
                  </p>
                  <p className="text-sm">Nama Ruangan: Ruang Guru</p>
                  <p className="text-sm">Tanggal: 13/05/22 | 08.00-12.00</p>
                </div>
                <span className="text-green-500 font-semibold">Selesai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
