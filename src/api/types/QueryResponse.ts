export interface ItemListResponse<T> {
  offset: number;
  count: number;
  type: Array<string>;
  items: Array<T>;
}

export interface ResponseItemAttribute {
  [key: string]: string
}

export interface ResponseItem {
  rank: number,
  probability: number,
  tuple: Array<{
    id: string,
    class: Array<string>,
    attributes: Array<ResponseItemAttribute>
  }>
}

export type PersonListQueryResponse = ItemListResponse<ResponseItem>;

export function getEmptyQueryResponse<T>(): ItemListResponse<T> {
  return {
    offset: 0,
    count: 0,
    type: ["OBJ"],
    items: []
  }
}
