"use client";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md h-20 flex justify-between items-center px-6 fixed top-0 left-0">
    <div className="flex items-center space-x-2"></div>
    <div className="flex items-center space-x-4">
      <img src="/images/profil.png" alt="User Icon" className="h-12 w-12" />
      <div className="flex flex-col">
        <span className="text-black font-semibold">Rafael Struick</span>
        <span className="text-black">Admin</span>
      </div>
    </div>
  </div>
);
};

export default Navbar;




// "use client";

// const Navbar = () => {
//   return (
//     <div className="w-full bg-white h-20 flex justify-between items-center pr-20 fixed">
//     <div className="flex items-center space-x-2"></div>
//     <div className="flex items-center space-x-4">
//       <img src="/images/profil.png" alt="User Icon" className="h-12 w-12" />
//       <div className="flex flex-col">
//         <span className="text-black font-semibold">Rafael Struick</span>
//         <span className="text-black">Admin</span>
//       </div>
//     </div>
//   </div>
// );
// };

// export default Navbar;

