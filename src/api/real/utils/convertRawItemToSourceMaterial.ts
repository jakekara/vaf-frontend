import SourceMaterial from "../../types/SourceMaterial";

export default function convertRawItemToSourceMaterial(rawItem: any): SourceMaterial | undefined {

    try {

        const itemDetails = rawItem.tuple[0];
        const itemClass = itemDetails.class[0]
        const id = itemDetails.attributes["http://schema.org/identifier"]
        // const title = itemDetails.attributes["http://schema.org/identifier"]

        return {
            id,
            title: `${itemClass} ${id}`,
            attributes: itemDetails.attributes || {}
        }

    } catch {
        return;
    }

}