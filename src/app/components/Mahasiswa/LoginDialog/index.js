import { useState } from "react";

export default function RoomDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-auto shadow-lg rounded-lg p-6 pt-24">
        {/* Breadcrumb Navigation and other content here */}

        {/* Button to Open Modal */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            Pinjam Ruangan Disini
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] h-[600px]">
              <div className="relative mb-4">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                <button
                  className="absolute top-0 right-0 text-gray-600 hover:text-gray-900"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
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
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input password"
                  />
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
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 text-center"
                >
                  Log In
                </button>
              </form>

              <p className="text-xs text-center text-gray-500 mt-6">
                TIM SEMAREASE – OSI © 2024
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
