"use client";

import Sidebar from "../../components/Operator/Sidebar";
import Navbar from "../../components/Operator/Navbar";
import TabelGedung from "../../components/Halaman/TabelGedung";

import { useState } from "react";

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
