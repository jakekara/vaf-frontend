import React, { useEffect, useState } from "react";
import { SearchArea } from "./SearchArea";
import { PersonList } from "./PersonList";
import { Person } from "../../api/types/Person";

// import api from "../../api/faker";
import api from "../../api/real";
import SearchSummary from "./SearchSummary";
import { ItemListResponse } from "../../api/types/QueryResponse";
import SplashArea from "../common/SplashArea";

function SearchPage() {
  // const [resultItems, setResultItems] = useState<Array<Person>>([]);
  const [resultsResponse, setResultsResponse] = useState<
    ItemListResponse<Person>
  >();
  const [searchTerm, setSearchTerm] = useState<string>();

  function doSearch() {
    // allow to default to all results
    // if (searchTerm === undefined) {
    //   return;
    // }

    api
      .listPersons({ searchParams: { term: searchTerm } })
      .then((response) => {
        setResultsResponse(response);
        // console.log("Got response", response);
        // setResultItems(response.items);
      })
      .catch((error) => {
        console.error("realAPI.listPersons error:", error);
      });

    setSearchTerm("");
  }
  useEffect(doSearch, [searchTerm]);

  return (
    <div>
      <SplashArea>
        <SearchArea onSearch={setSearchTerm} />
        <SearchSummary
          resultCount={resultsResponse?.count || 0}
          searchTerm={searchTerm || ""}
        ></SearchSummary>
      </SplashArea>
      <PersonList type="person" items={resultsResponse?.items || []} />
    </div>
  );
}

export default SearchPage;
