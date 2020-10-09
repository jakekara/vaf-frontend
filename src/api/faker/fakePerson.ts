import * as faker from "faker";
import Person from "../types/Person";

export const maybe = (x: any) => (Math.random() > 0.4 ? x : undefined);

export const fakePerson = (term: string): Person => {
  const img = maybe(faker.image.avatar());
  const birthDate = maybe(faker.date.past(100));
  const birthCountry = maybe(faker.address.country());
  const birthCity = maybe(faker.address.city());

  return {
    name: term + `${faker.name.lastName()}, ${faker.name.firstName()}`,
    id: faker.random.uuid(),
    img,
    birthDate,
    birthCity,
    birthCountry,
  };
};
