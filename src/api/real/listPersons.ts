import { config } from "dotenv";

config();

export function authString(username: string, password: string) {
  return `Basic ${btoa(`${username}:${password}`)}`;
}

export function performGET<T>(url: string): Promise<Response> {
  return fetch(url, {
    headers: {
      Authorization: authString(
        process.env.REACT_APP_USERNAME || "",
        process.env.REACT_APP_PASSWORD || ""
      ),
    },
  });
}

export function listPersons(options?: { count?: number }): Promise<Response> {
  return performGET(
    "https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/persons/results?config=full2"
  );
}
