import DateParts from "../api/types/DateParts";

export default function datePartsToString(dateParts: DateParts): string {

    const { year, month, day } = dateParts
    let ret: string = "";
    if (!year) {
        return ret;
    }
    ret += `${year}`;

    if (!month) {
        return ret;
    }

    ret += "-" + String(month).padStart(2, "0");

    if (!day) {
        return ret;
    }

    ret += "-" + String(day).padStart(2, "0");

    return ret;

    // function partToString(part: number | undefined, partLabel: string) {
    //     if (part || part === 0) {
    //         return `${part}`
    //     }
    //     return `<unknown ${partLabel}>`
    // }

    // return `${partToString(dateParts.year, "year")}-${partToString(dateParts.month, "month")}-${partToString(dateParts.day, "day")}`

}