import Image from "next/image";
import styles from "./page.module.css";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Header />
      <Cards />
    </div>
  );
}
