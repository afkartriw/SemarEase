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
        router.push('/mahasiswa/peminjaman'); // Redirect after alert is closed
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden bg-custom1">
        <div className="flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Mahasiswa silahkan Log In menggunakan email student.uns.ac.id
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Input email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input password"
                  />                 
                </div>
              </div>

              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-gray-700"
                >
                  CAPTCHA
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="/captcha-placeholder.png"
                    alt="Captcha"
                    className="h-12"
                  />
                  <button className="text-sm text-blue-600">Refresh</button>
                </div>
                <input
                  type="text"
                  id="captcha"
                  className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Input captcha"
                />
              </div>

              <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-blue-600">
                  Lupa Password?
                </a>
              </div>

              <button
                onClick={handleLoginClick}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 text-center block"
              >
                Log In
              </button>
            </form>

            <p className="text-xs text-center text-gray-500 mt-6">
              TIM SEMAREASE – OSI © 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
