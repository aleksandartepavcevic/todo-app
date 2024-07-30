import React, { useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

function App() {
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos", {
          method: "GET",
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
