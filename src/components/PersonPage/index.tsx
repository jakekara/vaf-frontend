import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Person } from "../../api/types/Person";
// import api from "../../api/faker";
import api from "../../api/real";
import SourceMaterial from "../../api/types/SourceMaterial";
import SourceMaterialList from "./SourceMaterialList";
import PersonMetaSummary from "./PersonMetaSummary";
import SplashArea from "../common/SplashArea";

interface PersonPageLoadedProps {
  person: Person;
}
function PersonPageLoaded(props: PersonPageLoadedProps): JSX.Element {
  const [sourceMaterials, setSourceMaterials] = useState<
    Array<SourceMaterial>
  >();
  const { person } = props;

  useEffect(() => {
    if (!person) {
      return;
    }
    api
      .getSourceMaterials({ personID: person?.id })
      .then((response) => {
        setSourceMaterials(response.items);
      })
      .catch((error) => {});
  }, [person]);

  return (
    <div>
      <SplashArea>
        <PersonMetaSummary person={props.person} />
      </SplashArea>
      <SourceMaterialList items={sourceMaterials || []} />
    </div>
  );
}

export default function PersonPage(): JSX.Element {
  const [person, setPerson] = useState<Person>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const params: { personID: string } = useParams();

  useEffect(() => {
    api
      .getPersonDetails({ personID: params.personID })
      .then((person: Person) => {
        setPerson(person);
      })
      .catch((error) => {
        setErrorMessage("Error loading details");
      });
  }, [params.personID]);

  if (person) {
    return <PersonPageLoaded person={person} />;
  }
  if (errorMessage) {
    return (
      <SplashArea>
        <div className="container">
          <h1>Something went wrong</h1>
          <p>
            Try <a href="/">searching again</a>.
          </p>
          <p>Error message: {errorMessage}</p>
        </div>
      </SplashArea>
    );
  }
  return <div>Loading details person with id {params.personID} </div>;
}
