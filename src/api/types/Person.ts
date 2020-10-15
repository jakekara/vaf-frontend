import DateParts from "./DateParts";

export type PersonDetails = Person;

export interface Person {
  id: string;
  name: string;

  attributes?: {
    [key: string]: any;
  };

  img?: string;
  birthDate?: DateParts;
  birthCountry?: string;
  birthCity?: string;

  deathDate?: DateParts;
}
