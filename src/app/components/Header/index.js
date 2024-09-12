import Image from 'next/image';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Kiri: Logo dan Hamburger Menu */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" // Sesuaikan path gambar logo kamu
          alt="Logo Olimnas"
          width={100} 
          height={50}
          className="mr-4"
        />
        <button className="text-blue-600 text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Kanan: Informasi Admin */}
      <div className="flex items-center">
        <div className="text-right mr-2">
          <div className="font-semibold">Admin Utama</div>
          <div className="text-gray-500 text-sm">admin</div>
        </div>
        <FaUserCircle className="text-gray-700 text-3xl" />
      </div>
    </header>
  );
};

export default Header;
