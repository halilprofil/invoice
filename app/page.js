import Image from "next/image";
import Cards from "@/components/cards";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import Modal from "@/components/modal";

export default async function Home() {
  let data ;
  try {
    const response = await fetch("https://invoiceapp.polatturkk.com.tr/api/Client/GetClient/3", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Cache-Control": "no-cache", // Cache'yi devre dışı bırak
      },
      cache: "no-store", // fetch API ile cache'yi kapat
    });

    if (!response.ok) {
      throw new Error("Veri alınırken hata oluştu!");
    }

    data = await response.json();
  } catch (err) {
   
  }

  

  

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="context">
        <Header data={data} />
        <div className="cardContainer"><Cards/></div>
      </div>
    </div>
  );
}
