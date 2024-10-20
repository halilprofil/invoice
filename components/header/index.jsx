import styles from "./page.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h3 className={styles.titleh3}>Incoives</h3>
        <p className={styles.titlep}>There are 7 total inviuces</p>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.filter}>
          <p>Filter by status</p>
          <p className={styles.filtericon}>⌄</p>
        </div>
        <div>
          <button className={styles.btn}>
            <p className={styles.btnplus}>+</p>
            <p className={styles.btnp}>New Invoice</p>
          </button>
        </div>
      </div>
    </div>
  );
}
