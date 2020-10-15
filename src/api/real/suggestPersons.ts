import listPersons from "../real/listPersons";
import { Person } from "../types/Person";

export default function suggestPersons(
  searchTerm: string
): Promise<Array<Person>> {
  return new Promise((resolve, reject) => {
    listPersons({ searchParams: { term: searchTerm } }).then((resp) => {
      const items = resp.items;
      if (!items) {
        console.warn(
          "Error: No items found during autocomplete: " + searchTerm
        );
        resolve([]);
      }
      let validSuggestions: Array<Person> = [];
      items.forEach((a: any) => {
        if (a !== undefined) {
          validSuggestions.push(a);
        }
      });

      resolve(validSuggestions);
    });
  });
}
