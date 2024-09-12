"use client";

import Sidebar from "../../components/Sidebar";
import NavDas from "../../components/NavDas";

export default function Table() {
  const data = [
    {
      id: 1,
      name: "Gedung D FKIP",
      location: "Link",
      image: "logo.jpg",
      operator: "Operator 1",
      description:
        "Fakultas Keguruan dan Ilmu Pendidikan (FKIP) UNS merupakan fakultas terbesar di UNS dengan program studi sarjana mencapai 24 jurusan.",
    },
    {
      id: 2,
      name: "Gedung E FEB",
      location: "Link",
      image: "image1.jpg",
      operator: "Operator 2",
      description:
        "Fakultas Ekonomi dan Bisnis (FEB) UNS memiliki berbagai jurusan ekonomi terbaik di Indonesia.",
    },
    {
      id: 3,
      name: "Gedung F FISIP",
      location: "Link",
      image: "image2.jpg",
      operator: "Operator 3",
      description:
        "Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) UNS fokus pada pengembangan ilmu sosial dan politik.",
    },
    {
      id: 4,
      name: "Gedung G FMIPA",
      location: "Link",
      image: "image3.jpg",
      operator: "Operator 4",
      description:
        "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) UNS menyediakan program studi sains yang beragam.",
    },
  ];

    return (
        <>
        <Sidebar />
        <NavDas />
    <div className="p-8 ml-60">
      <div className="overflow-x-auto">
        <div className="min-w-full shadow-lg rounded-lg overflow-hidden">
          <div className="bg-white px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800">TABEL GEDUNG</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Tambah Gedung Disini
            </button>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Gedung</th>
                <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gambar</th>
                <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                <th className="w-3/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                <th className="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 underline cursor-pointer">{item.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.image}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.operator}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-white px-6 py-4 flex items-center justify-between border-t">
            <p className="text-sm text-gray-600">Showing 1 to {data.length} of {data.length} entries</p>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l">Prev</button>
              <button className="px-3 py-1 bg-blue-500 text-white">1</button>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
