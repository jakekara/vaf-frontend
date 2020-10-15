import React from "react";
import SourceMaterial from "../../api/types/SourceMaterial";
import Card from "../common/Card";
import ObjectListing from "../common/ObjectListing";

function SourceMaterialListItem(props: { item: SourceMaterial }): JSX.Element {
  const identifierKey = "TracingDocumentNumber";
  let identifierLink = <div></div>;

  if (props.item.attributes && props.item.attributes[identifierKey]) {
    const identifier = props.item.attributes[identifierKey];
    identifierLink = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://collections.arolsen-archives.org/en/archive/&doc_id=${identifier}`}
      >
        View
      </a>
    );
  }

  return (
    <div>
      <Card link={props.item.url}>
        <h4>{props.item.title}</h4>
        {identifierLink}
        <ObjectListing attributes={props.item.attributes || {}} />
      </Card>
    </div>
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
