import * as faker from "faker";
import { QueryResponse, getEmptyQueryResponse } from "../types/QueryResponse";
import { Person } from "../types/Person";
import { fakePerson } from "./fakeData/fakePerson";
import { ListPersonsOptions } from "../types/BackendAPI";

export default function listPersons(
  options: ListPersonsOptions
): Promise<QueryResponse<Person>> {
  let count = 10;
  // if (options.count) {
  //   count = options.count;
  // }

  return new Promise(function (resolve, reject) {
    // fail 0.5% of the time
    if (Math.random() < 0.1) {
      const error = `Error: ${faker.lorem.sentence()}`;
      console.error(error);
      reject(error);
    }

    let result = getEmptyQueryResponse<Person>();

    result.count = faker.random.number({ min: 0, max: 1000 * 1000 });

    Array(Math.round(count * Math.random()))
      .fill({})
      .forEach(() => {
        const newFakePerson = fakePerson(options.searchParams.term || "");
        result.items.push(newFakePerson);
      });

    resolve(result);
  });
}
