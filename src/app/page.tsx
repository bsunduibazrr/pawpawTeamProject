import Image from "next/image";
import { Navbar } from "./features/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffff]">
      <Navbar />
    </div>
  );
}
