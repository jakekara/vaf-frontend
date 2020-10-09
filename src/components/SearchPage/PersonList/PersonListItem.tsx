import React, { ReactElement } from "react";
import { Person } from "../../../api/types/Person";
import Card from "../../common/Card";
import styles from "./PersonList.module.css";

// function Thumbnail(props: { person: Person }): ReactElement {
//   return (
//     <div className={styles.Thumbnail}>
//       {props.person.img ? (
//         <img
//           title={props.person.name}
//           alt={`Thumbnail preview for ${props.person.name}`}
//           src={props.person.img}
//         ></img>
//       ) : null}
//     </div>
//   );
// }

function Left(props: { person: Person }): ReactElement {
  return (
    <div className={styles.Left}>
      {/* <Thumbnail person={props.person} /> */}
    </div>
  );
}

function Detail(props: { label: string; value?: string }): ReactElement {
  if (!props.value) {
    return <div></div>;
  }
  return (
    <div>
      <span>
        <b>{props.label}:</b>
      </span>{" "}
      {props.value}
    </div>
  );
}

function Right(props: { person: Person }): ReactElement {
  return (
    <div className={styles.Right}>
      <h2>{props.person.name}</h2>
      <div className={styles.Details}>
        <div className={styles.Detail}>
          <Detail label="Authority ID" value={props.person.id.slice(0, 8)} />
          <Detail
            label="Date of birth"
            value={props.person.birthDate?.toString()}
          />
          <Detail label="Birth country" value={props.person.birthCountry} />
          <Detail label="Birth city" value={props.person.birthCity} />
        </div>
      </div>
    </div>
  );
}

export function PersonListItem(props: { person: Person }): ReactElement {
  return (
    <Card link={`/person/${props.person.id}`}>
      <div className={styles.PersonListItem}>
        <Left person={props.person} />
        <Right person={props.person} />
      </div>
    </Card>
  );
}
