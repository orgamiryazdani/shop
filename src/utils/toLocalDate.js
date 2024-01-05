export function toLocalDateString(data) {
    const options = {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(data).toLocaleDateString("fa-IR", options)
}

export function toLocalDateStringShort(data) {
    return new Date(data).toLocaleDateString("fa-IR")
}