import React from "react";

export default function ObjectListing(props: {
  attributes: { [key: string]: any };
}) {
  return (
    <React.Fragment>
      {Object.keys(props.attributes).map((label, i) => {
        if (typeof props.attributes[label] === "object") {
          return null;
        }
        const valueString = String(props.attributes[label] || "unknown");
        return (
          <div key={i}>
            <b>{label}</b>: {valueString}
          </div>
        );
      })}
    </React.Fragment>
  );
}
