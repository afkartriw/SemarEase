'use client'; // Marks this as a client component

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) => {
    return pathname === path
      ? 'text-blue-500 font-semibold border-b-4 border-blue-500 pb-1' // Ganti border-b-2 dengan border-b-4 dan tambahkan padding bawah (pb-1)
      : 'text-black font-normal hover:text-blue-500';
};

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4 mx-10">
        <Image
          src="/images/uns2.png" // Ensure the image is located in the public/images folder
          alt="UNS Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Menu Links */}
      <ul className="flex space-x-6 text-gray-700 font-semibold">
        <li>
          <a href="/" className={linkClass('/')}>
            Home
          </a>
        </li>
        <li>
          <a href="/ruangan" className={linkClass('/ruangan')}>
            Ruangan
          </a>
        </li>
        <li>
          <a href="/gedung" className={linkClass('/gedung')}>
            Gedung
          </a>
        </li>
        <li>
        <a
  href="/peminjaman"
  className={`${linkClass('/peminjaman')} ${linkClass('/mahasiswa')}`}
>
  Peminjaman
</a>
        </li>
      </ul>

      {/* Login Button */}
      <div>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-10">
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



// import Image from "next/image";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-50">
//       {/* Logo */}
//       <div className="flex items-center space-x-4 mx-10">
//         <Image
//           src="/images/uns2.png" // Pastikan file gambar logo ada di folder public/images
//           alt="UNS Logo"
//           width={100}
//           height={100}
//         />
//       </div>

//       {/* Menu Links */}
//       <ul className="flex space-x-6 text-gray-700 font-semibold">
//         <li>
//           <a href="/" className="m-5 hover:text-blue-500">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="/ruangan" className="m-5 hover:text-blue-500">
//             Ruangan
//           </a>
//         </li>
//         <li>
//           <a href="/gedung" className="m-5 hover:text-blue-500">
//             Gedung
//           </a>
//         </li>
//         <li>
//           <a href="/peminjaman" className="m-5 hover:text-blue-500">
//             Peminjaman
//           </a>
//         </li>
//       </ul>

//       {/* Login Button */}
//       <div>
//         <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-10">
//           Log In
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
