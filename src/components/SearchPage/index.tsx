import React, { useEffect, useState } from "react";
import { SearchArea } from "./SearchArea";
import { PersonList } from "./PersonList";
import Person from "../../api/types/Person";

import * as api from "../../api/faker";
import SearchSummary from "./SearchSummary";

function SearchPage() {
  const [resultItems, setResultItems] = useState<Array<Person>>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  function doSearch() {
    if (searchTerm === undefined) {
      return;
    }
    console.log("Search Term has changed:", searchTerm);
    api
      .listPersons({ term: searchTerm })
      .then((response) => {
        console.log("Got response", response);
        setResultItems(response.items);
      })
      .catch((error) => {
        console.error("realAPI.listPersons error:", error);
      });
  }
  useEffect(doSearch, [searchTerm]);

  return (
    <div>
      <SearchArea onSearch={setSearchTerm} />
      <SearchSummary
        resultCount={resultItems.length}
        searchTerm={searchTerm || ""}
      ></SearchSummary>
      <PersonList type="person" items={resultItems} />
    </div>
  );
}

export default SearchPage;
