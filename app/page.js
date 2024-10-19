import Image from "next/image";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="container">
      <SideBar />
<<<<<<< HEAD
      <Header />
      <Cards />
=======
      <div className="cardContainer">
        <Cards />
      </div>
>>>>>>> 8908723d180b4cdb973832612bd80bb35b5ea903
    </div>
  );
}
