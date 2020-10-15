import { GetSourceMaterialsOptions } from "../types/BackendAPI";
import {
  getEmptyQueryResponse,
  ItemListResponse,
} from "../types/QueryResponse";
import SourceMaterial from "../types/SourceMaterial";
import fakeSourceMaterial from "./fakeData/fakeSourceMaterial";
import { maybe } from "./utils/maybe";

// export interface GetSourceMaterialsProps {
//   personID: string;
//   limit?: number;
// }

export default function getSourceMaterials(
  props: GetSourceMaterialsOptions
): Promise<ItemListResponse<SourceMaterial>> {
  const limit = props.limit || 10;
  return new Promise((resolve, reject) => {
    const count = Math.min(Math.round(Math.random() * 100), limit);

    const fakeSourceMaterials: Array<SourceMaterial> = new Array(count)
      .fill(0)
      .map(fakeSourceMaterial);

    const simulateError: boolean = maybe(true, 0.2) || false;

    if (simulateError) {
      reject("Failed to retrieve documents");
    } else {
      const ret: ItemListResponse<SourceMaterial> = getEmptyQueryResponse();
      ret.items = fakeSourceMaterials;
      resolve(ret);
    }
  });
}
