import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-6 shadow-md bg-white">
        <h1 className="text-3xl font-bold text-blue-700">Halo Sobat Semar!</h1>
      </header>

      {/* Konten Utama */}
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gambar Kiri */}
          <div className="relative w-full max-w-md mx-auto">
      {/* Container for custom shape */}

    <div className="relative w-full max-w-md mx-auto">
      {/* Container for custom shape */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Blue bottom shape */}
        <div className="absolute bottom-0 left-0 bg-blue-800 w-36 h-16 transform -skew-x-12 translate-y-6 -translate-x-2"></div>

        {/* Main image */}
        <img
          src="images/bg5.png"
          alt="Custom Shape Image"
          className="w-full object-cover rounded-xl"
        />

        {/* White top cutout shape */}
        <div className="absolute top-0 right-0 bg-white w-14 h-14 transform skew-x-12 -translate-y-6"></div>
      </div>
    </div>
    </div>


          {/* Teks Kanan */}
          <div className="text-blue-700">
            <h2 className="text-3xl font-bold mb-4">Apakah kamu tau di Kampus UNS kita...</h2>
            <p className="text-lg">
              Banyak sekali tempat yang nyaman untuk para mahasiswa berkumpul, rapat, dan beraktivitas, terutama untuk kegiatan UKM, Organisasi, dan lain sebagainya.
            </p>
          </div>
        </div>

        {/* Footer Navigasi */}
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.75-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
