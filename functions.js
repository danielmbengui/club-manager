export function getFirstAndLastDayOfYear(year) {
    // Pour obtenir le premier jour de l'année, on crée une date avec le 1er janvier de cette année.
    const firstDay = new Date(year, 0, 1, 0, 0, 0);

    // Pour obtenir le dernier jour de l'année, on crée une date avec le 31 décembre de cette année.
    const lastDay = new Date(year, 11, 31, 23, 59, 59);
    //const lastDay = new Date(year, mont, 23, 59, 59);

    return { firstDay, lastDay };
}
export function getFirstAndLastDayOfMonth(month, year) {
    // Le mois est 0-indexé en JavaScript (0 pour janvier, 11 pour décembre),
    // donc pour obtenir le premier jour du mois spécifié, on crée une date avec le jour 1.
    const firstDay = new Date(year, month, 1, 0, 0, 0);

    // Pour obtenir le dernier jour du mois, on crée une date avec le mois suivant et le jour 0.
    // Cela revient à demander le jour précédant le premier jour du mois suivant.
    //const lastDay = new Date(year, month + 1, 0);
    const lastDay = new Date(year, month + 1, 0, 23, 59, 59);

    return { firstDay, lastDay };
}

export function formatCountBookings(value) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }

    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `${formattedNumber}`;
}
export function formatNumber(value) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }

    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `${formattedNumber}`;
}

export function formatCurrency(value) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }

    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `CHF ${formattedNumber}`;
}

export function formatPercentage(value) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }
    if(value<1) {
        value = value * 100;
    }
    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `${formattedNumber} %`;
}