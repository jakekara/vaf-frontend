import React, { ReactElement, useEffect, useRef, useState } from "react";
import Person from "../../../api/types/Person";
import * as api from "../../../api/faker";

export function SearchArea(props: {
  onSearch: (term: string) => void;
}): ReactElement {
  const [term, setTerm] = useState<string>("");
  const [suggestions, setSuggestsions] = useState<Array<Person>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setTerm(evt.target.value);
  }

  const getSuggestions = () => {
    if (term.trim().length < 1) {
      setSuggestsions([]);
      return;
    }
    api
      .listPersons({ term })
      .then((response) => {
        setSuggestsions(response.items);
      })
      .catch((error) => {
        console.error("realAPI.listPersons error:", error);
      });
  };

  useEffect(getSuggestions, [term]);

  let searchTerm = inputRef && inputRef.current ? inputRef.current.value : "";
  console.log("searchTerm", searchTerm);
  return (
    <div>
      <input ref={inputRef} onChange={onChange}></input>{" "}
      <button
        type="button"
        onClick={() => {
          setSuggestsions([]);
          props.onSearch(searchTerm);
        }}
      >
        Search
      </button>
      <div className="TypeaheadBox">
        {suggestions.map((p: Person, i) => {
          return <div key={i}>{p.name}</div>;
        })}
      </div>
    </div>
  );
}
