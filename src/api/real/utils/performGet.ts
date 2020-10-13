import { config } from "dotenv";
config();

const END_POINT = "http://localhost:3030/api/"

export default function performGET<T>(url: string): Promise<Response> {
    return fetch(END_POINT + url).then(resp => resp.json())
}
