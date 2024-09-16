// pages/index.js
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import PageGedung from "@/app/components/Halaman/PageGedung";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageGedung />
    </>
  );
}
