"use client";

import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";
import TabelGedung from "../../components/Halaman/TabelGedung";

const HalamanGedung = () => {

  return (
    <>
      <Navbar />
      <Sidebar />
      <TabelGedung />
    </>
  );
};

export default HalamanGedung;
