"use client"
import Image from "next/image";
import styles from "./page.module.css";


export default function Cards(){

   return(
    <div className={styles.cardContainer}>
        <div className={styles.cardItem}>
            <span className={styles.code}>#RT3080</span>
            <span className={styles.date}>Due  19 Aug 2021</span>
            <span className={styles.name}>Jensen Huang</span>
            <span className={styles.cash}>£ 1,800.90</span>
            <span className={styles.state}><Image width={10} height={10} src={"assets/oval.svg"}/>Paid</span>
            <button className={styles.details}><Image width={10} height={10} src="assets/button.svg"/></button>
        </div>
    </div>
   )
}