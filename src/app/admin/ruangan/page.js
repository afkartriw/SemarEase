"use client";

import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";
import TabelRuangan from "../../components/Halaman/TabelRuangan";


import { useState } from "react";

const HalamanRuangan = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <TabelRuangan />
    </>
  );
};

export default HalamanRuangan;
