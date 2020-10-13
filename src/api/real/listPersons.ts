import { ListPersonsOptions } from "../types/BackendAPI";
import { Person } from "../types/Person";
import { getEmptyQueryResponse, ItemListResponse } from "../types/QueryResponse";
import convertRawItemToPerson from "./utils/convertRawItemToPerson";
import performGET from "./utils/performGet";



export default function listPersons(options: ListPersonsOptions): Promise<ItemListResponse<Person>> {

  return new Promise((resolve, reject) => {
    performGET("q/persons/results?config=full2").then((resp: any) => {
      console.log("Received response from server", resp);

      // try to conver this
      let cleanResponse: ItemListResponse<Person> = getEmptyQueryResponse();
      cleanResponse.count = resp.count || 0;
      cleanResponse.offset = resp.offset || 0;
      cleanResponse.items = resp.items.map(convertRawItemToPerson).filter((a: any) => typeof (a) !== "undefined")
      console.log("cleanResponseItems", cleanResponse.items)
      resolve(cleanResponse);
      reject("Not implemented")
    })

  });

}
