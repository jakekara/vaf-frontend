import { BackendAPI } from "../types/BackendAPI";
import listPersons from "./listPersons";
import getPersonDetails from "./getPersonDetails";
import getSourceMaterials from "./getSourceMaterials";

const api: BackendAPI = {
    listPersons,
    getSourceMaterials,
    getPersonDetails

}

export default api;