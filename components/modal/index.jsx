"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Modal({open}) {
  const [items, setItems] = useState([
    {
      itemDesign: "",
      qty: 1,
      price: 156.0,
      total: 156.0,
    },
  ]);

 function handleClose(){
    open = false
 }

  const handleAddItem = () => {
    setItems([...items, { itemDesign: "", qty: 1, price: 156.0, total: 156.0 }]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <dialog className={styles.newInvoiceDialog} open={open}>
      <h2 style={{ color: "#0C0E16", fontSize: "24px", fontWeight: "700" }}>New Invoice</h2>
      <form action="">
        <div className={styles.billForm}>
          <h2 style={{ color: "#7C5DFA", fontSize: "15px", fontWeight: "700" }}>Bill From</h2>
          <p className={styles.adressP}>
            <label className={styles.adressLabel} htmlFor="adress">Street Address</label>
            <input type="text" id="adress" name="adress" className={styles.adress} placeholder="19 Union Terrace" />
          </p>
          <div className={styles.adressDetails}>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="city">City</label>
              <input type="text" name="city" id="city" className={styles.city} placeholder="London" />
            </p>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="postCode">Post Code</label>
              <input type="text" name="postCode" id="postCode" className={styles.city} placeholder="E1 3EZ" />
            </p>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="country">Country</label>
              <input type="text" name="country" id="country" className={styles.city} placeholder="United Kingdom" />
            </p>
          </div>
        </div>

        <div className={styles.billTo}>
          <h2 style={{ color: "#7C5DFA", fontSize: "15px", fontWeight: "700" }}>Bill To</h2>
          <p className={styles.adressP}>
            <label className={styles.detailsLabel} htmlFor="clientName">Client’s Name</label>
            <input className={styles.adress} type="text" name="clientName" id="clientName" placeholder="Alex Grim" />
          </p>
          <p className={styles.adressP}>
            <label className={styles.detailsLabel} htmlFor="clientEmail">Client’s Email</label>
            <input className={styles.adress} type="text" name="clientEmail" id="clientEmail" placeholder="alexgrim@mail.com" />
          </p>
          <p className={styles.adressP}>
            <label className={styles.detailsLabel} htmlFor="clientAdress">Street Address</label>
            <input className={styles.adress} type="text" name="clientAdress" id="clientAdress" placeholder="Alex Grim" />
          </p>
          <div className={styles.adressDetails}>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="clientCity">City</label>
              <input type="text" name="clientCity" id="clientCity" className={styles.city} placeholder="Bradford" />
            </p>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="clientPostCode">Post Code</label>
              <input type="text" name="clientPostCode" id="clientPostCode" className={styles.city} placeholder="BD1 9PB" />
            </p>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="clientCountry">Country</label>
              <input type="text" name="clientCountry" id="clientCountry" className={styles.city} placeholder="United Kingdom" />
            </p>
          </div>
          <div className={styles.changes}>
            <div className={styles.termAndDate}>
              <p className={styles.detailsP}>
                <label className={styles.detailsLabel} htmlFor="date">Invoice Date</label>
                <input className={styles.doubleInput} type="date" name="date" id="date" placeholder="21 Aug 2021" />
              </p>
              <p className={styles.detailsP}>
                <label className={styles.detailsLabel} htmlFor="terms">Payment Terms</label>
                <select className={styles.doubleInput} name="terms" id="terms">
                  <option value=""></option>
                </select>
              </p>
            </div>
            <p className={styles.detailsP}>
              <label className={styles.detailsLabel} htmlFor="design">Project Description</label>
              <input className={styles.adress} type="text" name="design" id="design" placeholder="Graphic Design" />
            </p>
          </div>

          <div className={styles.itemContainer}>
            <p style={{ color: "#777F98", fontSize: "18px", fontWeight: "700" }}>Item List</p>
            <div className={styles.itemList}>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Item Name</p>
                <input className={styles.threeInput} type="text" placeholder="Banner Design" name="itemDesign" />
              </div>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Qty.</p>
                <input className={styles.oneInput} type="text" placeholder="1" name="qty" />
              </div>
              <div className={styles.column}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Price</p>
                <input className={styles.twoInput} type="text" placeholder="156.00" name="price" />
              </div>
              <div className={styles.total}>
                <p style={{ color: "#7E88C3", fontSize: "13px" }}>Total</p>
                <span className={styles.total}>156.00</span>
              </div>
              <button className={styles.deleteBtn}>
                <Image src="/assets/delete.svg" width={20} height={20} />
              </button>
            </div>
          <div className={styles.itemList}>
            {items.map((item, index) => (
              <p className={styles.itemInput} key={index}>
                <input className={styles.threeInput} type="text" placeholder="Banner Design" name="itemDesign" />
                <input className={styles.oneInput} type="text" placeholder="1" name="qty"  />
                <input className={styles.twoInput} type="text" placeholder="156.00" name="price"  />
                <span className={styles.total}>{item.total}</span>
                <button type="button" className={styles.deleteBtn} onClick={() => handleDeleteItem(index)}>
                  <Image src="/assets/delete.svg" width={20} height={20} />
                </button>
              </p>
            ))}
          </div>
          <button type="button" className={styles.addNewItem} onClick={handleAddItem}>+ Add New Item</button>
        </div>
        <div className={styles.formBtns}>
          <div>
            <button className={styles.discardBtn}>Discard</button>
          </div>
          <div className={styles.formSaveButtons}>
            <button className={styles.draft}>Save as Draft</button>
            <button className={styles.save}>Save & Send</button>
          </div>

        <div className={styles.formButtons}>
          <button className={styles.cancel} onClick={handleClose}>Cancel</button>
          <button className={styles.save}>Save Changes</button>
        </div>
      </form>
    </dialog>
  );
}

