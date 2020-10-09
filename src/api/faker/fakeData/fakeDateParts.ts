import faker from "faker";
import DateParts from "../../types/DateParts";
import { maybe } from "../utils/maybe";

export default function fakeDateParts(): DateParts {
  return {
    year: maybe(faker.random.number({ min: 1850, max: 1945 }), 1),
    month: maybe(faker.random.number({ min: 1, max: 12 }), 0.5),
    day: maybe(faker.random.number({ min: 1, max: 28 }), 0.1),
  };
}
