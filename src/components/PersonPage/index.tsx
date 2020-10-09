import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Person from "../../api/types/Person";
import * as api from "../../api/faker";

interface PersonPageLoadedProps {
  person: Person;
}
function PersonPageLoaded(props: PersonPageLoadedProps) {
  return (
    <div>
      <h1>{props.person.name}</h1>
      <div>details</div>
    </div>
  );
}

export default function PersonPage() {
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
    return <div>Error: {errorMessage}</div>;
  } else {
    return <div>Loading details person with id {params.personID} </div>;
  }
}
