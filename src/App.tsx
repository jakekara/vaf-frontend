import React, { useState } from "react";
import styles from "./App.module.css";
import { SearchArea } from "./components/SearchArea";
import { PersonList } from "./components/PersonList";
import { listPersons } from "./api";
import Person from "./api/types/Person";

function App() {
  const [items, setItems] = useState<Array<Person>>([]);
  const [term, setTerm] = useState<string | null>();

  return (
    <div className={styles.App}>
      <SearchArea
        onSearch={(t: string | null) => {
          if (!t) {
            return;
          }
          setTerm(t);
          listPersons({ count: 100 })
            .then((response) => {
              setItems(response.items);
            })
            .catch((error) => {
              console.error("Caught error: " + error);
            });
        }}
      />
      <div>{term ? `${items.length} results for "${term}"` : null}</div>
      <PersonList type="person" items={items} />
    </div>
  );
}

export default App;
