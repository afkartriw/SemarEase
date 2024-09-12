// pages/index.js
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        <Image
          src="/images/bg1.png" // Ganti dengan gambar yang sesuai di folder public
          alt="UNS Building"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
            Halo Sobat Semar!
          </h1>
        </div>
      </div>



      {/* Footer Navigasi */}
      <div className="flex justify-between mt-12 px-4 text-sm text-gray-600">
          <p>Halaman Utama / Ruangan (12)</p>

          {/* Search Box */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="border rounded-full px-4 py-2 w-64 focus:outline-none"
            />
            <span className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.75-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </span>
          </div>
        </div>


      <main className="mt-8">
        <section className="my-12 px-4 m-10">
          <h2 className="text-2xl font-semibold mb-6">Lihat Ruangan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
            {/* Card Ruangan */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Ulangi Card untuk ruangan lain */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Ulangi Card untuk ruangan lain */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Ulangi Card untuk ruangan lain */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
              <img
                src="/images/r1.png"
                alt="Ruangan Aula FEB"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
                <p className="text-sm text-gray-600">
                  📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS
                </p>
                <p className="text-sm">Lantai 1</p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/login"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>           

            <div></div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded inline-flex justify-center items-center w-64"
            >
              <span>Lihat Semua</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
