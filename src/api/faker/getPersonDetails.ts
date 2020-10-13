import { GetPersonDetailsOptions } from "../types/BackendAPI";
import { Person } from "../types/Person";
import { fakePerson } from "./fakeData/fakePerson";
import { maybe } from "./utils/maybe";

export default function getPersonDetails(
  options: GetPersonDetailsOptions
): Promise<Person> {
  return new Promise((resolve, reject) => {
    const person = maybe(fakePerson(""), 0.9);
    if (person) {
      resolve(person);
      return;
    }
    reject("Could not fetch persons");
  });
}
