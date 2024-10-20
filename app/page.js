import Image from "next/image";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import Modal from "@/components/modal";

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="context">
        <Header />
        <div className="cardContainer"><Cards/></div>
      </div>
      <Modal/>
    </div>
  );
}
