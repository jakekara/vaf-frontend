import { config } from "dotenv";
config();

const END_POINT = "https://or7pwl1efk.execute-api.us-east-2.amazonaws.com/default/api/"

export default function performGET<T>(url: string): Promise<Response> {
    return fetch(END_POINT + url).then(resp => resp.json())
}
