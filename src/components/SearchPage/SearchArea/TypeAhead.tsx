import React, { useState } from "react";
import { Person } from "../../../api/types/Person";
import styles from "./TypeAhead.module.css";

interface TypeAheadProps {
  handleClick: () => void;
  suggestions: Array<Person>;
  handleTermChanged: (term: string) => void;
}

export default function TypeAhead(props: TypeAheadProps): JSX.Element {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div
      className={styles.TypeAhead}
      onBlur={() => {
        setHidden(true);
      }}
      onFocus={() => {
        setHidden(false);
      }}
    >
      <div className={styles.TopControls}>
        <input
          onChange={(event) => {
            props.handleTermChanged(event.target.value);
          }}
        ></input>
        <button type="button" onClick={props.handleClick}>
          Search
        </button>
      </div>
      <div className={`${styles.Bottom} ${hidden ? styles.Hidden : ""}`}>
        <div className={styles.SuggestionList}>
          {props.suggestions.map((person: Person, index: number) => {
            return (
              <div
                tabIndex={0}
                className={styles.SuggestionListItem}
                key={index}
              >
                <a href={`/person/${person.id}`}>{person.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
