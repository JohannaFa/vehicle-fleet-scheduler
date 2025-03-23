export function formatDatetoString(date: Date){
    const [day, month, year] = date.toLocaleDateString("de-DE").split(".");
    const formattedDate: string = `${year}-${month}-${day}`;

    return formattedDate;
}