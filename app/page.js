import Image from "next/image";
import styles from "./page.module.css";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Cards />
    </div>
  );
}
