

export interface QueryResponse<T> {
    offset: number,
    count: number,
    type: Array<string>,
    items: Array<T>
}

export function getEmptyQueryResponse<T>(): QueryResponse<T> {
    return {
        offset: 0,
        count: 0,
        type: ["OBJ"],
        items: []
    }
}