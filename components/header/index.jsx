"use client";

import { useState } from "react";
import Modal from "../modal"; // Modal bileşeninizin içeriği
import styles from "./page.module.css";

export default function Header({ data }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  // Filter modalını aç/kapat
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  // New Invoice modalını aç/kapat
  const toggleNewInvoiceModal = () => {
    setIsNewInvoiceModalOpen(!isNewInvoiceModalOpen);
  };

  // Checkbox'ları güncelle
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
        {/* Filter by status butonu */}
        <button onClick={toggleFilterModal} className={styles.filter}>
          <p>Filter by status</p>
          <p className={styles.filtericon}>⌄</p>
        </button>

        {/* New Invoice butonu */}
        <div>
          <button className={styles.btn} onClick={toggleNewInvoiceModal}>
            <p className={styles.btnplus}>+</p>
            <p className={styles.btnp}>New Invoice</p>
          </button>
        </div>
      </div>

      {isFilterModalOpen && (
        <div className={styles.filterDialog}>
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
          <button className={styles.closeBtn} onClick={toggleFilterModal}>
            Close
          </button>
        </div>
      )}

      <Modal open={isNewInvoiceModalOpen} data={data} />
    </div>
  );
}
