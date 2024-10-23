"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h3 className={styles.titleh3}>Incoives</h3>
        <p className={styles.titlep}>There are 7 total inviuces</p>
      </div>
      <div className={styles.headerRight}>
        <button onClick={() => openModal()} className={styles.filter}>
          <p>Filter by status</p>
          <p className={styles.filtericon}>⌄</p>
        </button>
        <div>
          <button className={styles.btn}>
            <p className={styles.btnplus}>+</p>
            <p className={styles.btnp}>New Invoice</p>
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={closeModal} // Overlay'e tıklanınca modal kapanacak
          ></div>
          <dialog className={styles.dialog} open={isOpen}>
            <div style={{ display: "flex", gap: "6px" }}>
              <input type="checkbox" />
              <label className={styles.label} htmlFor="label1">
                Draft
              </label>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <input type="checkbox" />
              <label className={styles.label} htmlFor="label2">
                Pending
              </label>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <input type="checkbox" />
              <label className={styles.label} htmlFor="label3">
                Paid
              </label>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}
