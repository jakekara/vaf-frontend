import React, { ReactElement, useState } from "react";

export function SearchArea(props: {
  onSearch: (term: string | null) => void;
}): ReactElement {
  const [term, setTerm] = useState<string | null>(null);

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setTerm(evt.target.value);
  }

  return (
    <div>
      <input onChange={onChange}></input>
      <button type="button" onClick={() => props.onSearch(term)}>
        Search
      </button>
    </div>
  );
}
