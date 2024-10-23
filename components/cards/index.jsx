"use server";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// Tarih formatlama fonksiyonu
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}

export default async function Cards() {
  let data = null;
  let error = null;

  try {
    const response = await fetch("https://invoiceapp.polatturkk.com.tr/api/Invoice/GetInvoices", {
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
    console.error("Hata: ", err);
    error = err.message;
  }

  if (error) {
    return <div>Veri alınırken bir hata oluştu: {error}</div>; // Hata mesajını göster
  }

  return (
    <div className={styles.cardContainer}>
      {data?.map((x) => (
        <div className={styles.cardItem} key={x.id}>
          <span className={styles.code}>#RT{x.invoiceId}</span>
          <span className={styles.date}>{formatDate(x.createdDate)}</span>
          <span className={styles.name}>{x.fullName}</span>
          <span className={styles.cash}>£ {x.totalAmount}</span>

          {x.paymentStatus == 1 && (
            <span className={styles.state1}>
              <Image width={10} height={10} src="/assets/oval.svg" alt="Status" />
              Paid
            </span>
          )}
          {x.paymentStatus == 2 && (
            <span className={styles.state2}>
              <Image width={10} height={10} src="/assets/oval2.svg" alt="Status" />
              Pending
            </span>
          )}
          {x.paymentStatus == 3 && (
            <span className={styles.state3}>
              <Image width={10} height={10} src="/assets/oval3.svg" alt="Status" />
              Draft
            </span>
          )}

          <button className={styles.details}>
            <Link href={"/detailpage/" + x.invoiceId}>
              <Image width={10} height={10} src="/assets/button.svg" alt="Details" />
            </Link>
          </button>
          
        </div>
      ))}
    </div>
  );
}
