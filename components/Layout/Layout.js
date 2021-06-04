import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Layout.module.css";

function Layout({ children, title = "World Ranks" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={switchTheme} className={styles.themeSwitcher}>
        <Brightness6Rounded />
      </button>

      <header className={styles.header}>
        <Link href="/">
          <div className={styles.header_logo}>
            <div style={{ display: "flex" }}>MhShoghi</div>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              &hearts;
            </div> */}
            <div style={{ display: "flex" }}>YegSalehi</div>
          </div>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Layout;
