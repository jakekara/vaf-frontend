import React, { ReactElement, useEffect, useState } from "react";
import { Person } from "../../../api/types/Person";
import api from "../../../api/real";
import TypeAhead from "./TypeAhead";
import styles from "./SearchArea.module.css";

const DELAY_MS = 200;

export function SearchArea(props: {
  onSearch: (term: string) => void;
}): ReactElement {
  const [term, setTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<Person>>([]);
  const [throttle, setThrottle] = useState<any>();

  // function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
  //   setTerm(evt.target.value);
  // }

  const getSuggestions = () => {
    // require at least two characters
    if (term.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    api
      .suggestPersons(term)
      .then((items) => {
        setSuggestions(items);
      })
      .catch((error) => {
        console.error("realAPI.listPersons error:", error);
      });

    setThrottle(undefined);
  };

  const getSuggestionsThrottled = () => {
    if (throttle) {
      console.log("Clearing throttle", throttle, typeof throttle);
      clearInterval(throttle);
    }
    setThrottle(setTimeout(getSuggestions, DELAY_MS));
  };

  useEffect(getSuggestionsThrottled, [term]);

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
