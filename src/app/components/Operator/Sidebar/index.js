"use client"; // Marks this as a client component

import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname
import Swal from 'sweetalert2'; // Import SweetAlert2

const Sidebar = () => {
  const pathname = usePathname(); // Use usePathname instead of useRouter

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
        window.location.href = '/'; // Redirect to home or login page
      }
    });
  };

  return (
    <div className="w-72 h-screen bg-white text-black p-5 fixed top-0 left-0 z-10 flex flex-col shadow-md">
      {/* Menurunkan logo */}
      <img
        src="/images/uns2.png"
        alt="Logo"
        className="h-20 w-50 mx-auto my-10" // menambah jarak atas dan bawah
      />
      <div className="flex-grow flex flex-col mt-20">
        <ul>
          <li className={`border-t border-gray-400 ${pathname === "/operator" ? "bg-blue-100" : ""}`}>
            <Link
              href="/operator"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/operator" ? "bg-blue-300" : ""}`}
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`border-t border-gray-400 ${pathname === "/operator/gedung" ? "bg-blue-100" : ""}`}>
            <Link
              href="/operator/gedung"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/operator/gedung" ? "bg-blue-300" : ""}`}
            >
              <span>Gedung</span>
            </Link>
          </li>
          <li className={`border-t border-gray-400 ${pathname === "/operator/ruangan" ? "bg-blue-100" : ""}`}>
            <Link
              href="/operator/ruangan"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/operator/ruangan" ? "bg-blue-300" : ""}`}
            >
              <span>Ruangan</span>
            </Link>
          </li>
          <li className={`border-t border-gray-400 ${pathname === "/operator/pesan" ? "bg-blue-100" : ""}`}>
            <Link
              href="/operator/pesan"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/operator/pesan" ? "bg-blue-300" : ""}`}
            >
              <span>Pesan</span>
            </Link>
          </li>
          <li className={`border-t border-b border-gray-400 ${pathname === "/operator/peminjaman" ? "bg-blue-100" : ""}`}>
            <Link
              href="/operator/peminjaman"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/operator/peminjaman" ? "bg-blue-300" : ""}`}
            >
              <span>Peminjaman</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center w-full mt-auto cursor-pointer"
        onClick={handleLogout} // Attach the logout handler
      >
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;
