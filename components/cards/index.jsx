
import Image from "next/image";
import styles from "./page.module.css";




export  default async function Cards(){
    const response = await fetch("https://invoiceapp.polatturkk.com.tr/api/Invoice/GetInvoices", {
        method: "GET",
        headers: {
          accept: "text/plain",
          "Cache-Control": "no-cache", // Cache'yi devre dışı bırak
        },
        cache: "no-store", // fetch API ile cache'yi kapat
      });

      const data = await response.json();
      console.log(data[0].items[0]);
      
 
  

        return (
            <div className={styles.cardContainer}>
              {data?.map((x) => (
                <div className={styles.cardItem} key={x.id}>
                  <span className={styles.code}>#RT{x.id}</span>
                  <span className={styles.date}>Due 19 Aug 2021</span>
                  <span className={styles.name}>{x.customerName}</span>
                  <span className={styles.cash}>£ 1,800.90</span>
                  <span className={styles.state}>
                    <Image width={10} height={10} src="/assets/oval.svg" alt="Status" />
                    Paid
                  </span>
                  <button className={styles.details}>
                    <Image width={10} height={10} src="/assets/button.svg" alt="Details" />
                  </button>
                </div>
              ))}
            </div>
          );
        }        