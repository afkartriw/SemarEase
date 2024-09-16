"use client";

import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

export default function PageRuangan() {
  const pathname = usePathname(); // Get the current path

  // Determine the base path for the detail page
  const getDetailPageHref = () => {
    if (pathname.startsWith("/mahasiswa/ruangan")) {
      return "/mahasiswa/ruangan/detail";
    } else if (pathname.startsWith("/ruangan")) {
      return "/ruangan/detail";
    } else {
      return "/ruangan/detail"; // Default path
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Zen+Dots&family=Caveat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="mx-auto mt-16 px-4 mt-32">
        {/* Reduced horizontal padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image with custom shape */}
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-2xl  ml-10">
              {/* Custom Blue Shape */}
              <div className="absolute bottom-0 left-0 w-[440px] h-[240px] bg-blue-800 transform -translate-x-12 translate-y-24 clip-custom-shape"></div>{" "}
              {/* Main image */}
              <Image
                src="/images/bg5.png" // Change this to the path of your image
                alt="UNS Campus Image"
                width={1800}
                height={1000}
                className="w-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="text-blue-900 text-center">
            <h1 className="text-5xl font-bold mb-6 font-zen-dots">
              Halo Sobat Semar!
            </h1>
            <p className="text-2xl leading-relaxed font-caveat">
              Apakah kamu tau di Kampus UNS kita... Banyak sekali tempat yang
              nyaman untuk para mahasiswa berkumpul, rapat, dan berdiskusi
              mengenai kegiatan UKM, Organisasi, dan lain sebagainya.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between mt-12 px-4 text-sm text-gray-600">
        <p>Halaman Utama / Ruangan (12)</p>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-2 w-64 focus:outline-none"
          />
          <span className="absolute right-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.75-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        </div>
      </footer>

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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
                  href={getDetailPageHref()} // Dynamically set the href
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
