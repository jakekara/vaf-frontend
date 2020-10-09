import DateParts from "./DateParts";

export default interface Person {
  id: string;
  name: string;

  img?: string;
  birthDate?: DateParts;
  birthCountry?: string;
  birthCity?: string;
}
