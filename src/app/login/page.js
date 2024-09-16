"use client"; // Pastikan ini ada di atas file

import Navbar from "@/app/components/Navbar";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Login = () => {
  const router = useRouter(); // Initialize router

  const handleLoginClick = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Display SweetAlert2 popup
    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil',
      text: 'Anda berhasil login!',
      showConfirmButton: false, // Hide the OK button
      timer: 1500, // Duration for which the alert is displayed
      timerProgressBar: true, // Show progress bar
      willClose: () => {
        router.push('/admin'); // Redirect after alert is closed
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex">
        {/* Left side */}
        <div className="flex justify-center items-center min-h-screen w-1/2">
          <div className="bg-white p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
            <p className="text-center text-gray-500 mb-8">
              Login untuk menggunakan layanan
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Input email"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Input password"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleLoginClick}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 text-center block"
              >
                Log In
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm mb-2">
                Mahasiswa silahkan log in menggunakan
                <br />
                email student.uns.ac.id
              </p>
              <button className="p-3 rounded-lg w-full border border-blue-500 flex items-center justify-center space-x-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <img
                  src="images/uns.png"
                  alt="Uns Icon"
                  className="w-5 h-5 mr-2"
                />
                <span>Log in Email student.uns.ac.id</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 relative h-screen">
          <img
            src="/images/bg_uns.png"
            alt="UNS Building"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
