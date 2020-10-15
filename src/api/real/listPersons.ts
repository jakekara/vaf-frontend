import { ListPersonsOptions } from "../types/BackendAPI";
import { Person } from "../types/Person";
import {
  getEmptyQueryResponse,
  ItemListResponse,
} from "../types/QueryResponse";
import convertRawItemToPerson from "./utils/convertRawItemToPerson";
import performGET from "./utils/performGet";

export default function listPersons(
  options: ListPersonsOptions
): Promise<ItemListResponse<Person>> {
  let urls = {
    statistics: "q/persons/statistics?config=full2",
    results: "q/persons/results?config=full2",
  };

  if (
    options.searchParams.term &&
    options.searchParams.term.trim().length > 0
  ) {
    const cleanSearchTerm = encodeURI(options.searchParams.term.trim());
    urls = {
      statistics: `q/search/p/text/${cleanSearchTerm}/statistics?config=full2`,
      results: `q/search/p/text/${cleanSearchTerm}/results?config=full2`,
    };
  }

  return new Promise((resolve, reject) => {
    performGET(urls.statistics).then((stats: any) => {
      performGET(urls.results).then((resp: any) => {
        console.log("Received response from server", resp);
        // try to conver this
        let cleanResponse: ItemListResponse<Person> = getEmptyQueryResponse();
        cleanResponse.statistics = stats;
        cleanResponse.totalResults = stats.total;
        cleanResponse.count = resp.count || 0;
        cleanResponse.offset = resp.offset || 0;
        cleanResponse.items = resp.items
          .map(convertRawItemToPerson)
          .filter((a: any) => typeof a !== "undefined");
        console.log("cleanResponse", cleanResponse);
        resolve(cleanResponse);
        // reject("Not implemented");
      });
    });
  });
}
