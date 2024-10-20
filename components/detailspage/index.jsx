import styles from "./page.module.css";
export default function Details() {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.backbtn}>
        <p className={styles.back}>{"<"} </p> <p className={styles.backbtncontent}>Go back</p>
      </div>
      <div className={styles.detailHeader}>
        <div className={styles.detailLeftContent}>
          <p className={styles.dlcTitle}>Status</p>
          <p className={styles.dlcPending}>Pending</p>
        </div>
        <div className={styles.detailRightContent}>
          <button className={styles.drcEdit}>Edit</button>
          <button className={styles.drcDel}>Delete</button>
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
      </div>
    </div>
  );
}
