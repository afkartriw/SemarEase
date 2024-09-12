// pages/index.js
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const facilities = [
  { imgSrc: "/images/icons/ac.png", label: "Pendingin Ruangan" },
  { imgSrc: "/images/icons/toko.png", label: "Kantin" },
  { imgSrc: "/images/icons/wifi.png", label: "Konektivitas Internet" },
  { imgSrc: "/images/icons/meet.png", label: "Ruang Tunggu" },
  { imgSrc: "/images/icons/wc.png", label: "Toilet" },
  { imgSrc: "/images/icons/parkir.png", label: "Parkir" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-100 min-h-screen p-8 mt-20">
        {/* Main Building Section */}
        <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
          {/* Menambah tinggi */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left: Building Image */}
            <div className="relative w-full lg:w-2/3 h-full">
              <Image
                src="/images/bg4.png" // Replace with your image path
                alt="Gedung D FKIP UNS"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Right: Building Information */}
            <div className="w-full lg:w-1/3 bg-blue-600 text-white p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">GEDUNG D FKIP UNS</h2>
                <p className="mt-2 text-sm">
                  Fakultas Keguruan dan Ilmu Pendidikan (FKIP) UNS merupakan
                  fakultas terbesar di UNS dengan program studi sarjana mencapai
                  24 jurusan. Gedung ini memiliki 3 lantai.
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-bold">Alamat:</span> Jalan Ir. Sutami
                  No. 36A, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah
                  57126
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Jam:</span> Buka - Tutup pukul
                  18.00
                </p>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/map.png" // Replace with your map image path
                  alt="Map"
                  width={600} // Perbesar ukuran peta
                  height={400} // Perbesar ukuran peta
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg mt-6 p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            FASILITAS PADA GEDUNG
          </h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={facility.imgSrc}
                  alt={facility.label}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-sm font-semibold">{facility.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
