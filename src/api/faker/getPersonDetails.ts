import Person from "../types/Person";
import { fakePerson, maybe } from "./fakePerson";

interface getPersonDetailsOptions {
  personID: string;
}
export function getPersonDetails(
  options: getPersonDetailsOptions
): Promise<Person> {
  return new Promise((resolve, reject) => {
    const person = maybe(fakePerson(""));
    if (person) {
      resolve(person);
      return;
    }
    reject("Could not fetch persons");
  });
}
