import React, { ReactElement, useEffect, useState } from "react";
import { Person } from "../../../api/types/Person";
import api from "../../../api/faker";
import TypeAhead from "./TypeAhead";
import styles from "./SearchArea.module.css";

export function SearchArea(props: {
  onSearch: (term: string) => void;
}): ReactElement {
  const [term, setTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<Person>>([]);

  // function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
  //   setTerm(evt.target.value);
  // }

  const getSuggestions = () => {
    if (term.trim().length < 1) {
      setSuggestions([]);
      return;
    }
    api
      .listPersons({ searchParams: { term } })
      .then((response) => {
        setSuggestions(response.items);
      })
      .catch((error) => {
        console.error("realAPI.listPersons error:", error);
      });
  };

  useEffect(getSuggestions, [term]);

  return (
    <div className={styles.SearchArea}>
      <div className="container">
        <TypeAhead
          handleClick={() => {
            props.onSearch(term);
          }}
          suggestions={suggestions}
          handleTermChanged={setTerm}
        />
        {/* <button
          type="button"
          onClick={() => {
            setSuggestions([]);
            props.onSearch(searchTerm);
          }}
        >
          Search
        </button> */}
      </div>
    </div>
  );
}
