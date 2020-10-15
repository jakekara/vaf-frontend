import { GetPersonDetailsOptions } from "../types/BackendAPI";
import { PersonDetails } from "../types/Person";
import convertRawItemToPerson from "./utils/convertRawItemToPerson";
import performGET from "./utils/performGet";

function convertRawItemToPersonDetails(
  rawItem: any
): PersonDetails | undefined {
  console.log("Converting raw item", rawItem);
  return convertRawItemToPerson(rawItem);
}

export default function getPersonDetails(
  options: GetPersonDetailsOptions
): Promise<PersonDetails> {
  return new Promise((resolve, reject) => {
    performGET(`q/person/p/id/${options.personID}/results?config=full2`).then(
      (resp: any) => {
        console.log("Got person details", resp);
        try {
          resolve(convertRawItemToPersonDetails(resp.items[0]));
        } catch {
          console.warn("Error parsing API response. Got", resp);
          reject("Error parsing API response");
        }
      }
    );
  });
}
