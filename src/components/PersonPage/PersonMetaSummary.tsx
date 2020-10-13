import React from "react";
import { Person } from "../../api/types/Person";
import ObjectListing from "../common/ObjectListing";
import styles from "./PersonMetaSummary.module.css";

interface PersonMetaSummaryProps {
  person: Person;
}

export default function PersonMetaSummary(
  props: PersonMetaSummaryProps
): JSX.Element {
  return (
    <div className={styles.PersonMetaSummary}>
      <div className="container">
        <h1 className={""}>{props.person.name}</h1>
        <ObjectListing attributes={props.person.attributes || {}} />
      </div>
    </div>
  );
}
