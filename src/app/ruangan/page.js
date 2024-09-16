// pages/index.js
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import PageRuangan from "@/app/components/Halaman/PageRuangan";


export default function Home() {
  return (
    <>
      <Navbar />
      <PageRuangan />      
    </>
  );
}
