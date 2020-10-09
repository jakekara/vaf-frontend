import { Person, PersonDetails } from "./Person";
import { QueryResponse } from "./QueryResponse";
import SourceMaterial from "./SourceMaterial";

export interface ListPersonsOptions {
  pageSize?: number;
  offset?: number;

  searchParams: {
    term?: string;
    birthCountry?: string;
    birthCity?: string;
    birthDateRange?: {
      min: Date;
      max: Date;
    };
  };
}

export interface GetPersonDetailsOptions {
  personID: string;
}

export interface GetSourceMaterialsOptions {
  personID: string;
}

export interface BackendAPI {
  listPersons(options: ListPersonsOptions): Promise<QueryResponse<Person>>;
  getPersonDetails(options: GetPersonDetailsOptions): Promise<PersonDetails>;
  getSourceMaterials(
    options: GetSourceMaterialsOptions
  ): Promise<QueryResponse<SourceMaterial>>;
}
