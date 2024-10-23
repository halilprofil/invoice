import Image from "next/image";
import styles from "./page.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <Image width={103} height={103} src="/assets/Packman.svg" alt="" />
      </div>
      <div className={styles.sidebarFooter}>
        <Image width={30} height={30} src="/assets/darkmood.svg" alt="" />
        <div className={styles.divider}></div>
        <Image width={50} height={50} src="/assets/profile.svg" alt="" />
      </div>
    </div>
  );
}
