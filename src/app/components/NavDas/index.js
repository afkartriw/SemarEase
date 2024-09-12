"use client";

const NavDas = () => {
  return (
    <div className="w-full bg-white shadow-md h-20 flex justify-between items-center px-6 fixed top-0 left-0">
      <div className="flex items-center space-x-2">
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-black font-semibold">Admin Utama</span>
        <img
          src="/images/profil.png"
          alt="User Icon"
          className="h-8 w-8"
        />
      </div>
    </div>
  );
};

export default NavDas;
