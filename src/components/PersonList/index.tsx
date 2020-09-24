import React, { ReactElement } from "react";
import { PersonListItem } from "./PersonListItem";
import Person from "../../api/types/Person";
import styles from "./PersonList.module.css";

export function PersonList(props: {
  items: Array<Person>;
  type: "person";
}): ReactElement {
  return (
    <div className={styles.PersonList}>
      {props.items.map(
        (item: Person, idx: number): ReactElement => {
          return <PersonListItem key={idx} person={item} />;
        }
      )}
    </div>
  );
}
