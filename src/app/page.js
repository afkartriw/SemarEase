import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import PageHome from "@/app/components/Halaman/PageHome";


export default function Home() {
  return (
    <div>
      <Navbar />
      <PageHome />      
    </div>
  )
}
