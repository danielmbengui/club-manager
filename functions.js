export function getRandomRGBA(alpha = 0.5) {
    // Générer des valeurs aléatoires pour le rouge, le vert et le bleu
    const r = Math.floor(Math.random() * 256); // Rouge : entre 0 et 255
    const g = Math.floor(Math.random() * 256); // Vert : entre 0 et 255
    const b = Math.floor(Math.random() * 256); // Bleu : entre 0 et 255
  
    // Retourner la chaîne rgb ET rgba
    return [`rgba(${r}, ${g}, ${b}, ${1})`, `rgba(${r}, ${g}, ${b}, ${alpha})`];
  }

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
export function getFirstAndLastDayOfDay(day, month, year) {
    // Le mois est 0-indexé en JavaScript (0 pour janvier, 11 pour décembre),
    // donc pour obtenir le premier jour du mois spécifié, on crée une date avec le jour 1.
    const firstDay = new Date(year, month, day, 0, 0, 0);

    // Pour obtenir le dernier jour du mois, on crée une date avec le mois suivant et le jour 0.
    // Cela revient à demander le jour précédant le premier jour du mois suivant.
    //const lastDay = new Date(year, month + 1, 0);
    const lastDay = new Date(year, month, day, 23, 59, 59);

    return { firstDay, lastDay };
}
export function getDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
        throw new Error("Le mois doit être entre 1 (janvier) et 12 (décembre).");
    }
    if (year < 1) {
        throw new Error("L'année doit être un entier positif.");
    }

    // Calculer le nombre de jours dans le mois
    const daysInMonth = new Date(year, month, 0).getDate();

    // Générer un tableau de 1 à daysInMonth
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
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
export function formatNumber(value, decimal=2) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }
    //let decimal = 0;
    const scaled = value * 100;
    const rounded = Math.round(scaled / 5) * 5;
    if(value - parseInt(value) > 0) {
        decimal = decimal;
    } else {
        decimal = 0;
    }
    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = (rounded / 100).toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `${formattedNumber}`;
}

export function formatCurrency(value, decimal = 2) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }

    // Calculer la valeur en centimes
    const scaled = value * 100;

    // Arrondir au multiple inférieur ou égal de 5 centimes
    const rounded = Math.ceil(scaled / 5) * 5;

    // Vérifier si le nombre initial a des décimales pour ajuster les décimales
    const decimals = value % 1 !== 0 ? decimal : 0;

    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = (rounded / 100).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `CHF ${formattedNumber}`;
}

export function formatPercentage(value) {
    if (typeof value !== "number") {
        throw new Error("Le paramètre doit être un nombre.");
    }
    if (value < 1) {
        value = value * 100;
    }
    // Formater le nombre avec des séparateurs de milliers (apostrophes)
    const formattedNumber = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // Ajouter " CHF" à la fin
    return `${formattedNumber} %`;
}

export function getArrayMonthStr() {
    return [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ]
}

export function getArrayMonthJson() {
    return [
        { value: 0, text: "Tous" },
        { value: 1, text: "Janvier" },
        { value: 2, text: "Février" },
        { value: 3, text: "Mars" },
        { value: 4, text: "Avril" },
        { value: 5, text: "Mai" },
        { value: 6, text: "Juin" },
        { value: 7, text: "Juillet" },
        { value: 8, text: "Août" },
        { value: 9, text: "Septembre" },
        { value: 10, text: "Octobre" },
        { value: 11, text: "Novembre" },
        { value: 12, text: "Décembre" },
    ];
}

export function parseDoubleToTimeInterval(doubleTime) {
    /// MODIFY CODE ONLY BELOW THIS LINE
    const total = doubleTime; // Assurez-vous que doubleTime est défini quelque part dans votre code
  
    // Obtient la partie entière de 'total' pour les heures
    const currentHour = Math.trunc(total); // En JavaScript, utilisez Math.truncate() pour obtenir la partie entière
    // Calcule les minutes en soustrayant les heures de 'total' et en multipliant par 60
    // Utilisez Math.round() pour arrondir au nombre entier le plus proche si nécessaire
    const currentMinute = Math.round((total - currentHour) * 60);
  
    // Formate les heures et les minutes pour avoir toujours deux chiffres en ajoutant des zéros au besoin
    const currentTimeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    return currentTimeString;
  
    /// MODIFY CODE ONLY ABOVE THIS LINE
  }
  export function parseDoubleToHourInterval(doubleTime) {
    /// MODIFY CODE ONLY BELOW THIS LINE
    const total = doubleTime; // Assurez-vous que doubleTime est défini quelque part dans votre code
  
    // Obtient la partie entière de 'total' pour les heures
    const currentHour = Math.trunc(total); // En JavaScript, utilisez Math.truncate() pour obtenir la partie entière
    // Calcule les minutes en soustrayant les heures de 'total' et en multipliant par 60
    // Utilisez Math.round() pour arrondir au nombre entier le plus proche si nécessaire
    const currentMinute = Math.round((total - currentHour) * 60);
  
    // Formate les heures et les minutes pour avoir toujours deux chiffres en ajoutant des zéros au besoin
    var currentTimeString = `${currentHour.toString().padStart(1, '0')}h${currentMinute.toString().padStart(2, '0')}`;
    if(currentMinute == 0) {
        currentTimeString = `${currentHour.toString().padStart(1, '0')}h`;
    }
    return currentTimeString;
  
    /// MODIFY CODE ONLY ABOVE THIS LINE
  }
  export function parseDoubleToHourChartInterval(doubleTime) {
    /// MODIFY CODE ONLY BELOW THIS LINE
    const total = doubleTime; // Assurez-vous que doubleTime est défini quelque part dans votre code
  
    // Obtient la partie entière de 'total' pour les heures
    const currentHour = Math.trunc(total); // En JavaScript, utilisez Math.truncate() pour obtenir la partie entière
    // Calcule les minutes en soustrayant les heures de 'total' et en multipliant par 60
    // Utilisez Math.round() pour arrondir au nombre entier le plus proche si nécessaire
    const currentMinute = Math.round((total - currentHour) * 60);
  
    // Formate les heures et les minutes pour avoir toujours deux chiffres en ajoutant des zéros au besoin
    const currentTimeString = `${currentHour.toString().padStart(2, '0')}h${currentMinute.toString().padStart(2, '0')}`;
    return `${currentHour.toString()}h`;
  
    /// MODIFY CODE ONLY ABOVE THIS LINE
  }

  export function distributeWithPrecision(total, percentages) {
    if (typeof total !== "number" || !Array.isArray(percentages)) {
        throw new Error("Paramètres invalides. 'total' doit être un nombre et 'percentages' un tableau.");
    }

    // Calcul des sous-totaux arrondis au plus proche multiple de 0.05
    let subTotals = percentages.map(percentage => {
        const rawValue = total * (percentage / 100);
        const scaled = Math.floor(rawValue * 100 / 5) * 5; // Arrondi inférieur à 0.05
        return scaled / 100; // Retour en unités
    });

    // Calcul de l'écart total
    const roundedTotal = subTotals.reduce((sum, value) => sum + value, 0);
    const difference = total - roundedTotal;

    // Ajuster la dernière valeur pour combler l'écart
    if (Math.abs(difference) > 0) {
        subTotals[subTotals.length - 1] += difference;
    }

    return subTotals;
}