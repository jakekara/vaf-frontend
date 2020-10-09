import React from "react";

interface SearchSummaryProps {
  searchTerm: string;
  totalPages?: number;
  currentPage?: number;
  resultCount?: number;
  firstResult?: number;
  lastResult?: number;
}
export default function SearchSummary(props: SearchSummaryProps): JSX.Element {
  return (
    <div>
      Total results: {props.resultCount}. Showing results {props.firstResult}-
      {props.lastResult} Page {props.currentPage} of {props.totalPages}.
    </div>
  );
}
