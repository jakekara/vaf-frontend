import React, { FunctionComponent } from "react";
import styles from "./CardList.module.css";

interface CardProps {
  link?: string;
}

const Card: FunctionComponent<CardProps> = ({ children, link }) => {
  let ret = (
    <div
      tabIndex={0}
      className={`${styles.Card} ${link ? styles.LinkCard : ""}`}
    >
      {children}
    </div>
  );

  if (link) {
    ret = <a href={link}>{ret}</a>;
  }

  return ret;
};

export default Card;
// interface CardListProps {}

// const CardList: FunctionComponent<CardListProps> = ({ children }) => {
//   return (
//     <div className={styles.CardList}>
//       {(children || []).map((e: Element, i: number) => {
//         return <CardListCard key={i}>e</CardListCard>;
//       })}
//     </div>
//   );
// };
