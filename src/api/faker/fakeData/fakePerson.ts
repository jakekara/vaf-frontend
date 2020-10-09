import * as faker from "faker";
import { Person } from "../../types/Person";
import { maybe } from "../utils/maybe";
import fakeDateParts from "./fakeDateParts";

export const fakePerson = (term: string): Person => {
  const img = maybe(faker.image.avatar());
  // const birthDate = maybe(faker.date.past(100));
  const birthDate = maybe(fakeDateParts());
  const deathDate = maybe(fakeDateParts());
  const birthCountry = maybe(faker.address.country());
  const birthCity = maybe(faker.address.city());

  return {
    name: term + `${faker.name.lastName()}, ${faker.name.firstName()}`,
    id: faker.random.uuid(),
    img,
    birthDate,
    birthCity,
    birthCountry,
    deathDate
  };
};
