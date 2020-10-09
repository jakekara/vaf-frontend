import React from "react";
import numeral from "numeral";
import styles from "./SearchSummary.module.css";

interface SearchSummaryProps {
  searchTerm: string;
  totalPages?: number;
  currentPage?: number;
  resultCount: number;
  firstResult?: number;
  lastResult?: number;
}
export default function SearchSummary(props: SearchSummaryProps): JSX.Element {
  return (
    <div className="container">
      <div className={styles.SearchSummary}>
        {numeral(props.resultCount).format("0,0")} results
      </div>
    </div>
  );
}
