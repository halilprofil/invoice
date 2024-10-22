"use client"

import { useState } from "react";
import Modal from "../modal";
import styles from "./page.module.css";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h3 className={styles.titleh3}>Invoices</h3>
        <p className={styles.titlep}>There are 7 total invoices</p>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.filter}>
          <p>Filter by status</p>
          <p className={styles.filtericon}>⌄</p>
        </div>
        <div>
          <button className={styles.btn} onClick={toggleModal}>
            <p className={styles.btnplus}>+</p>
            <p className={styles.btnp}>New Invoice</p>
          </button>
        </div>
      </div>
      <Modal open={isModalOpen} />
    </div>
  );
}