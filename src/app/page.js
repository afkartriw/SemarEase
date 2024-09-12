import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/images/bg3.png" // Ganti dengan gambar yang sesuai di folder public
          alt="UNS Building"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Sistem Informasi Peminjaman</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold">Ruangan SemarEase</h1>
          <p className="text-white text-lg md:text-2xl mt-4">UNIVERSITAS SEBELAS MARET</p>
        </div>
      </div>
      {/* Ruangan Terfavorit */}
      <section className="my-12 px-4 m-10">
        <h2 className="text-2xl font-semibold mb-6">Lihat Ruangan Terfavorit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 m-10">
          {/* Card Ruangan */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src="/images/r1.png" // Ganti dengan gambar ruangan yang sesuai
              alt="Ruangan Aula FEB"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
              <p className="text-sm text-blue-500 mt-2">📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
            </div>
          </div>
          {/* Ulangi Card untuk ruangan lain */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src="/images/r1.png" // Ganti dengan gambar ruangan yang sesuai
              alt="Ruangan Aula FEB"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
              <p className="text-sm text-blue-500 mt-2">📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src="/images/r1.png" // Ganti dengan gambar ruangan yang sesuai
              alt="Ruangan Aula FEB"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
              <p className="text-sm text-blue-500 mt-2">📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src="/images/r1.png" // Ganti dengan gambar ruangan yang sesuai
              alt="Ruangan Aula FEB"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
              <p className="text-sm text-blue-500 mt-2">📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src="/images/r1.png" // Ganti dengan gambar ruangan yang sesuai
              alt="Ruangan Aula FEB"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ruangan Aula FEB</h3>
              <p className="text-sm text-blue-500 mt-2">📍 Gedung 3 Fakultas Ekonomi Dan Bisnis UNS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
