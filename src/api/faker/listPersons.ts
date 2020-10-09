import * as faker from "faker";
import { QueryResponse, getEmptyQueryResponse } from "../types/QueryResponse";
import Person from "../types/Person";
import { fakePerson } from "./fakePerson";

export function listPersons(options: {
  term?: string;
  count?: number;
}): Promise<QueryResponse<Person>> {
  let count = 10;
  if (options.count) {
    count = options.count;
  }

  return new Promise(function (resolve, reject) {
    // fail 0.5% of the time
    if (Math.random() < 0.1) {
      const error = `Error: ${faker.lorem.sentence()}`;
      console.error(error);
      reject(error);
    }

    let result = getEmptyQueryResponse<Person>();
    Array(Math.round(count * Math.random()))
      .fill({})
      .forEach(() => {
        const newFakePerson = fakePerson(options.term || "");
        result.items.push(newFakePerson);
      });

    resolve(result);
  });
}
