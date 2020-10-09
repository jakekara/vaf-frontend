import faker from "faker";
import SourceMaterial from "../../types/SourceMaterial";
import { maybe } from "../utils/maybe";

export default function fakeSourceMaterial(): SourceMaterial {
  // choose a random locale
  const locale: "de" | "en" = maybe("en") || "de";
  faker.locale = locale;
  const ret: SourceMaterial = {
    id: faker.random.uuid(),
    title: faker.lorem.words(3 + Math.round(Math.random() * 10)),
    // url: maybe(faker.internet.url())
    url: maybe("https://example.com/example-document"),
  };

  faker.locale = "en";

  return ret;
}
