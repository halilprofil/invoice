"use client";

import { useState } from "react";
import Modal from "../modal"; // Modal bileşeninizin içeriği
import styles from "./page.module.css";

export default function Header() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const toggleNewInvoiceModal = () => {
    setIsNewInvoiceModalOpen(!isNewInvoiceModalOpen);
  };

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h3 className={styles.titleh3}>Invoices</h3>
        <p className={styles.titlep}>There are 7 total invoices</p>
      </div>
      <div className={styles.headerRight}>
        <button onClick={toggleFilterModal} className={styles.filter}>
          <p>Filter by status</p>
          <p className={styles.filtericon}>⌄</p>
        </button>
        <div>
          <button className={styles.btn} onClick={toggleNewInvoiceModal}>
            <p className={styles.btnplus}>+</p>
            <p className={styles.btnp}>New Invoice</p>
          </button>
        </div>
      </div>

      {/* Filtreleme Modalı */}
      <Modal open={isFilterModalOpen} onClose={toggleFilterModal}>
        <h4>Filter Invoices</h4>
        <div>
          <div style={{ display: "flex", gap: "6px" }}>
            <input type="checkbox" name="draft" checked={filters.draft} onChange={handleCheckboxChange} />
            <label className={styles.label} htmlFor="draft">
              Draft
            </label>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <input type="checkbox" name="pending" checked={filters.pending} onChange={handleCheckboxChange} />
            <label className={styles.label} htmlFor="pending">
              Pending
            </label>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <input type="checkbox" name="paid" checked={filters.paid} onChange={handleCheckboxChange} />
            <label className={styles.label} htmlFor="paid">
              Paid
            </label>
          </div>
        </div>
      </Modal>

      {/* Yeni Fatura Modalı */}
      <Modal open={isNewInvoiceModalOpen} onClose={toggleNewInvoiceModal}>
        <h4>Create New Invoice</h4>
        {/* Yeni fatura için form içeriği buraya eklenebilir */}
        <form>
          <div>
            <label className={styles.label}>Invoice Title:</label>
            <input type="text" className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Amount:</label>
            <input type="number" className={styles.input} />
          </div>
          <button type="submit" className={styles.btnSubmit}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
