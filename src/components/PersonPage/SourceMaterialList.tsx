import React from "react";
import SourceMaterial from "../../api/types/SourceMaterial";
import Card from "../common/Card";
import ObjectListing from "../common/ObjectListing";
// import styles from "./SourceMaterialList.module.css";

function SourceMaterialListItem(props: { item: SourceMaterial }) {
  return (
    // <div className={styles.SourceMaterialListItem}>
    <Card link={props.item.url}>
      <h4>{props.item.title}</h4>
      <ObjectListing attributes={props.item} />
    </Card>
    // </div>
  );
}

interface SourceMaterialListProps {
  items: Array<SourceMaterial>;
}

export default function SourceMaterialList(
  props: SourceMaterialListProps
): JSX.Element {
  let listElement = null;

  if (props.items.length < 1) {
    listElement = <Card>No source items found.</Card>;
  } else {
    listElement = (
      <div>
        {/* <div className="container"> */}
        {props.items.map((item: SourceMaterial, index: number) => {
          return <SourceMaterialListItem item={item} key={index} />;
        })}
        {/* </div> */}
      </div>
    );
  }

  return <div className="container">{listElement}</div>;
}
