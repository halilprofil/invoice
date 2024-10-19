import Image from "next/image";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="container">
      <SideBar />
      <div className="cardContainer">
        <Cards />
      </div>
    </div>
  );
}
