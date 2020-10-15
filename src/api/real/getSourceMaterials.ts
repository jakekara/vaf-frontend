import { GetSourceMaterialsOptions } from "../types/BackendAPI";
import {
  getEmptyQueryResponse,
  ItemListResponse,
} from "../types/QueryResponse";
import SourceMaterial from "../types/SourceMaterial";
import convertRawItemToSourceMaterial from "./utils/convertRawItemToSourceMaterial";
import performGET from "./utils/performGet";

export default function getSourceMaterials(
  options: GetSourceMaterialsOptions
): Promise<ItemListResponse<SourceMaterial>> {
  return new Promise((resolve, reject) => {
    performGET("q/related_documents/p/id/45507/results?config=full2").then(
      (resp: any) => {
        console.log("got document list", resp);
        let result: ItemListResponse<SourceMaterial> = getEmptyQueryResponse();
        result.items = resp.items
          .map(convertRawItemToSourceMaterial)
          .filter((a: any) => a !== undefined);
        console.log("Resolve result", result);
        resolve(result);
      }
    );
  });
}
