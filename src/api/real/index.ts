import { BackendAPI } from "../types/BackendAPI";
import listPersons from "./listPersons";
import getPersonDetails from "./getPersonDetails";
import getSourceMaterials from "./getSourceMaterials";
import suggestPersons from "./suggestPersons";

const api: BackendAPI = {
  listPersons,
  getSourceMaterials,
  getPersonDetails,
  suggestPersons,
};

export default api;
