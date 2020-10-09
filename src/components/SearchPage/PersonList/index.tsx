import React, { ReactElement } from "react";
import { PersonListItem } from "./PersonListItem";
import styles from "./PersonList.module.css";
import { Person } from "../../../api/types/Person";

export function PersonList(props: {
  items: Array<Person>;
  type: "person";
}): ReactElement {
  return (
    <div className={styles.PersonList}>
      <div className="container">
        {props.items.map(
          (item: Person, idx: number): ReactElement => {
            return <PersonListItem key={idx} person={item} />;
          }
        )}
      </div>
    </div>
  );
}
