import styles from "./page.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h1>Incoives</h1>
        <p>There are 7 total inviuces</p>
      </div>
      <div className="">
        <div>Filter by status</div>
        <div>
          <button>New Invoice</button>
        </div>
      </div>
    </div>
  );
}
