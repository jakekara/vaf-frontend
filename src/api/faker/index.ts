import listPersons from "./listPersons";
import getPersonDetails from "./getPersonDetails";
import getSourceMaterials from "./getSourceMaterials";
import { BackendAPI } from "../types/BackendAPI";

const api: BackendAPI = {
  listPersons,
  getPersonDetails,
  getSourceMaterials,
};

export default api;
