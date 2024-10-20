import Image from "next/image";
import styles from "./page.module.css";

export default function Modal(){
    return(
        <dialog open={false}>
            <h2>Edit #XM9141</h2>
            <form action="">
                <div className={styles.billForm}>
                    <h2>Bill From</h2>
                    <p className={styles.adressP}>
                        <label className={styles.adressLabel} htmlFor="adress">Street Address</label>
                        <input type="text" id="adress" name="adress" className={styles.adress} placeholder="19 Union Terrace"/>
                    </p>
                    <div className={styles.adressDetails}>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="city">City</label>
                            <input type="text" name="city" id="city"  className={styles.city} placeholder="London"/>
                        </p>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="postCode">Post Code</label>
                            <input type="text" name="postCode" id="postCode"  className={styles.city} placeholder="E1 3EZ"/>
                        </p>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="country">Country</label>
                            <input type="text" name="country" id="country"  className={styles.city} placeholder="United Kingdom"/>
                        </p>
                        
                    </div>



                </div>

                <div className="billTo">
                    <h2>Bill To</h2>
                    <p className={styles.adressP}>
                       <label className={styles.detailsLabel}  htmlFor="clientName">Client’s Name</label>
                       <input className={styles.adress} type="text" name="clientName" id="clientName" placeholder="Alex Grim"/>
                    </p>
                    <p className={styles.adressP}>
                       <label className={styles.detailsLabel} htmlFor="clientEmail">Client’s Email</label>
                       <input className={styles.adress} type="text" name="clientEmail" id="clientEmail" placeholder="alexgrim@mail.com"/>
                    </p>
                    <p className={styles.adressP}>
                       <label className={styles.detailsLabel} htmlFor="clientAdress">Street Address</label>
                       <input className={styles.adress} type="text" name="clientAdress" id="clientAdress" placeholder="Alex Grim"/>
                    </p>
                    <div className={styles.adressDetails}>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="clientCity">City</label>
                            <input type="text" name="clientCity" id="clientCity"  className={styles.city} placeholder="Bradford"/>
                        </p>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="clientPostCode">Post Code</label>
                            <input type="text" name="clientPostCode" id="clientPostCode"  className={styles.city} placeholder="BD1 9PB"/>
                        </p>
                        <p className={styles.detailsP}> 
                            <label className={styles.detailsLabel} htmlFor="clientCountry">Country</label>
                            <input type="text" name="clientContry" id="clientCountry"  className={styles.city} placeholder="United Kingdom"/>
                        </p>
                        
                    </div>

                    <div className={styles.changes}>
                        <div className={styles.termAndDate}>
                            <p className={styles.detailsP}>
                                <label className={styles.detailsLabel} htmlFor="date">Invoice Date</label>
                                <input className={styles.doubleInput} type="date" name="date" id="date" placeholder="21 Aug 2021"/>
                            </p>
                            <p className={styles.detailsP}>
                                <label className={styles.detailsLabel} htmlFor="terms">Payment Terms</label>
                                <select  className={styles.doubleInput} name="terms" id="terms">
                                    <option value=""></option>
                                </select>
                            </p>
                        </div>
                        <p className={styles.detailsP}>
                            <label  className={styles.detailsLabel} htmlFor="design">Project Description</label>
                            <input  className={styles.adress}  type="text" name="design" id="design" placeholder="Graphic Design"/>
                        </p>
                    </div>

                    <div className={styles.itemList}>
                        <p>
                            <input className={styles.threeInput} type="text" placeholder="Banner Design" name="itemDesign"/>
                            <input className={styles.oneInput} type="text" placeholder="1" name="qty"/>
                            <input className={styles.twoInput} type="text" placeholder="156.00" name="price"/>
                            <span className={styles.total}>156.00</span>
                            <button className={styles.deleteBtn}><Image src="/assets/delete.svg" width={20} height={20}/></button>
                        </p>
                    </div>
                  <button className={styles.addNewItem}>+ Add New Item</button>
                </div>

                <div className={styles.formButtons}>
                    <button className={styles.cancel}>Cancel</button>
                    <button className={styles.save}>Save Changes</button>
                </div>
                
            </form>

        </dialog>

    )
}