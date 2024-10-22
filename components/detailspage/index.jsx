"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Details({data}) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dialogRef = useRef(null);
  console.log(data);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }
  
  return (
    <>
      <div className={styles.detailContainer}>
        <div className={styles.backbtn}>
          <Link href={"/"} style={{display:"flex", gap:"10px",alignItems:"center"}}><p className={styles.back}>{"<"} </p> <p className={styles.backbtncontent}>Go back</p></Link>
          
        </div>
        <div className={styles.detailHeader}>
          <div className={styles.detailLeftContent}>
            <p className={styles.dlcTitle}>Status</p>
            <p className={styles.dlcPending}>Pending</p>
          </div>
          <div className={styles.detailRightContent}>
            <button className={styles.drcEdit}>Edit</button>
            <button onClick={() => openModal()} className={styles.drcDel}>
              Delete
            </button>
            <button className={styles.drcPaid}>Mark as Paid</button>
          </div>
        </div>
        <div className={styles.detailContent}>
          <div className={styles.dcTop}>
            <div className={styles.dctLeft}>
              <p className={styles.dctlTop}>#XM9141</p>
              <p className={styles.dctlBottom}>Graphic Design</p>
            </div>
            <div className={styles.dctRight}>
              19 Union Terrace <br /> London <br /> E1 3EZ <br /> United Kingdom
            </div>
          </div>
          <div className={styles.dcMedium}>
            <div className={styles.dcmLeft}>
              <div>
                <p>Invoice Date</p> <br />
                <p>21 Aug 2021</p>
              </div>
              <div>
                <p>Payment Due</p>
                <br />
                <p>20 Sep 2021</p>
              </div>
            </div>
            <div className={styles.dcmMedium}>
              <p>Bill To</p> <br />
              <p>Alex Grim</p> <br />
              <p style={{ textAlign: "left" }}>
                84 Church Way <br /> Bradford <br /> BD1 9PB <br />
                United Kingdom
              </p>
            </div>
            <div className={styles.dcmRight}>
              <p>Sent to</p> <br />
              <p>alexgrim@mail.com</p>
            </div>
            <div></div>
          </div>
          <div className={styles.itemsContainer}>
            <div className={styles.column}>
              <p style={{ color: "#7E88C3", fontSize: "13px" }}>Item Name</p>
              <p style={{ color: "#0C0E16", fontSize: "15px", fontWeight: "700" }}>Banner Design</p>
            </div>
            <div className={styles.itemsDetail}>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>QTY.</p>
                <p style={{ color: "#7E88C3", fontSize: "15px" }}>1</p>
              </div>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Price</p>
                <p style={{ color: "#7E88C3", fontSize: "15px" }}>€156.00</p>
              </div>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Total</p>
                <p style={{ color: "#0C0E16", fontSize: "15px", fontWeight: "700" }}>€156.00</p>
              </div>
            </div>
          </div>
          <div className={styles.dcFooter}>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>Amount Due</p>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>€556.00</p>
          </div>
        </div>
        {isOpen && (
          <>
            <div
              className={styles.overlay}
              onClick={closeModal} // Overlay'e tıklanınca modal kapanacak
            ></div>
            <dialog className={styles.dialog} open={isOpen}>
              <h2 style={{ color: "#0C0E16", fontSize: "24px", fontWeight: "700" }}>Confirm Deletion</h2>
              <p style={{ color: "#888EB0", fontSize: "13px" }}>
                Are you sure you want to delete invoice #XM9141? This action cannot be undone.
              </p>
              <div style={{ display: "flex", gap: "8px", paddingLeft: "200px" }}>
                <button className={styles.cancelBtn} onClick={closeModal}>
                  Cancel
                </button>
                <button className={styles.drcDel}>Delete</button>
              </div>
            </dialog>
          </>
        )}
      </div>
    </>
  );
}
