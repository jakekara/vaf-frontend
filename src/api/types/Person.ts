import DateParts from "./DateParts";

export type PersonDetails = Person;

export interface Person {
  id: string;
  name: string;

  img?: string;
  birthDate?: DateParts;
  birthCountry?: string;
  birthCity?: string;

  deathDate?: DateParts;
}
