import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname

const Sidebar = () => {
  const pathname = usePathname(); // Use usePathname instead of useRouter
  
  return (
    <div className="w-72 h-screen bg-white text-white p-5 fixed top-0 left-0 z-10 flex flex-col">
      {/* Menurunkan logo */}
      <img
        src="/images/uns2.png"
        alt="Logo"
        className="h-20 w-50 mx-auto my-10" // menambah jarak atas dan bawah
      />
      <div className="flex-grow flex flex-col mt-20">
        <ul>
          <li className={`border-t border-gray-400 ${pathname === "/admin" ? "bg-blue-100" : ""}`}>
            <Link
              href="/admin"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/admin" ? "bg-blue-300" : ""}`}
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`border-t border-gray-400 ${pathname === "/admin/gedung" ? "bg-blue-100" : ""}`}>
            <Link
              href="/admin/gedung"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/admin/gedung" ? "bg-blue-300" : ""}`}
            >
              <span>Gedung</span>
            </Link>
          </li>
          <li className={`border-t border-gray-400 ${pathname === "/admin/ruang" ? "bg-blue-100" : ""}`}>
            <Link
              href="/admin/ruang"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/admin/ruang" ? "bg-blue-300" : ""}`}
            >
              <span>Ruangan</span>
            </Link>
          </li>
          <li className={`border-t border-b border-gray-400 ${pathname === "/admin/operator" ? "bg-blue-100" : ""}`}>
            <Link
              href="/admin/operator"
              className={`flex items-center space-x-4 hover:bg-blue-300 p-3 rounded text-black ${pathname === "/admin/operator" ? "bg-blue-300" : ""}`}
            >
              <span>Operator</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center w-full mt-auto">
        <Link href="/" className="flex justify-center w-full">
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
