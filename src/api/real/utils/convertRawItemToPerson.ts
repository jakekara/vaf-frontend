import { Person } from "../../types/Person";

export default function convertRawItemToPerson(rawItem: any): Person | undefined {

    if (typeof (rawItem) !== "object") {
        console.warn("rawItem not object", rawItem)
        return;
    }

    try {
        const itemDetails = rawItem.tuple[0];
        const firstName = itemDetails.attributes["http://schema.org/givenName"]
        const lastName = itemDetails.attributes["http://schema.org/familyName"];
        const id = itemDetails.attributes["http://schema.org/identifier"]
        const name = `${lastName}, ${firstName}`;
        return {
            id,
            name,
            attributes: itemDetails.attributes
        }
    }
    catch (e) {
        console.warn(e)
        return;
    }

}
