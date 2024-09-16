"use client"; // Marks this as a client component

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from 'sweetalert2'; // Import SweetAlert2

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) => {
    return pathname === path
      ? "text-blue-500 font-semibold border-b-4 border-blue-500 pb-1" // Ganti border-b-2 dengan border-b-4 dan tambahkan padding bawah (pb-1)
      : "text-black font-normal hover:text-blue-500";
  };

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default link behavior

    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of your account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout operation here
        // For example, you might redirect to a logout endpoint or clear user session
        window.location.href = '/login'; // Redirect to login page
      }
    });
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
          <a href="/mahasiswa" className={linkClass("/mahasiswa")}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/mahasiswa/ruangan"
            className={linkClass("/mahasiswa/ruangan")}
          >
            Ruangan
          </a>
        </li>
        <li>
          <a
            href="/mahasiswa/gedung"
            className={linkClass("/mahasiswa/gedung")}
          >
            Gedung
          </a>
        </li>
        <li>
          <a
            href="/mahasiswa/peminjaman"
            className={`${linkClass("/mahasiswa/peminjaman")} ${linkClass(
              "/mahasiswa/mahasiswa"
            )}`}
          >
            Peminjaman
          </a>
        </li>
      </ul>

      {/* Logout Button */}
      <a
        href="/login" // This href will be replaced by the function
        onClick={handleLogout} // Attach the logout handler
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mx-10 cursor-pointer" // Add cursor-pointer to indicate clickable element
      >
        Log Out
      </a>
    </nav>
  );
};

export default Navbar;
