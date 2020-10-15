import { config } from "dotenv";
config();

const END_POINT =
  process.env.REACT_APP_ENDPOINT || "http://localhost:3033/api/";

export default function performGET<T>(url: string): Promise<Response> {
  return fetch(END_POINT + url).then((resp) => resp.json());
}
