import Image from "next/image";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="cardContainer">
        <Cards />
      </div>
    </div>
  );
}
