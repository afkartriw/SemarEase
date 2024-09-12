import Navbar from "@/app/components/Navbar";

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex mt-20">
      {/* Left side */}
      <div className="flex justify-center items-center min-h-screen w-1/2">
        {/* <div className="text-center mb-6 absolute top-10 left-10">
          <a href="/">
            <img
              src="/images/uns2.png"
              alt="UNS Logo"
              width={100}
              height={100}
            />
          </a>
        </div> */}

        <div className="bg-white  p-8 w-full max-w-md">
          {/* Login Header */}
          <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
          <p className="text-center text-gray-500 mb-8">
            Login untuk menggunakan layanan
          </p>

          {/* Form Section */}
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
            <a
              href="/admin"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 text-center block"
            >
              Log In
            </a>
          </form>

          {/* Information for students */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm mb-2">
              Mahasiswa silahkan log in menggunakan
              <br />
              email student.uns.ac.id
            </p>
            <button className=" p-3 rounded-lg w-full border border-blue-500 flex items-center justify-center space-x-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {/* Add an icon here if you have one */}
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
