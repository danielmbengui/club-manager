export function convertDateToHourValue(date) {
  if (!date || !(date instanceof Date)) {
    // Handle the case where 'date' is not a Date object or is undefined
    //console.error("Invalid date object");
    return null; // Or some other indication of an error
  }
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return hour + (minutes / 60);
}

export function convertValueToHourMinutesJson(value) {
  return { hours: parseInt(value), minutes: value - parseInt(value) };
}

export function isSummerTime(date) {
  // Fonction pour trouver le dernier dimanche d'un mois spécifique pour une année donnée
  function lastSunday(month, year) {
    let date = new Date(year, month + 1, 0); // Dernier jour du mois
    date.setDate(date.getDate() - date.getDay()); // Soustraire le jour de la semaine pour revenir au dernier dimanche
    return date;
  }

  // Extraire l'année de la date fournie
  const annee = date.getFullYear();

  // Déterminer les dates de changement pour l'année de la date fournie
  const startSummerTime = lastSunday(2, annee); // Mars
  const endSummerTime = lastSunday(9, annee); // Octobre

  // Vérifier si la date fournie est en période d'heure d'été
  if (date >= startSummerTime && date < endSummerTime) {
    // Ajoutez ici le code pour ajuster la date si nécessaire
    return true;
  } else {
    // Ajoutez ici le code pour ajuster la date si nécessaire
    return false;
  }

  // Retourner la date ajustée (si ajustement il y a)
  //return date;
}
export function formatDateToISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois (0-indexé)
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  //2024-11-30T07:00:00
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
export function addHoursToDate(date, nHours = 0) {
  if (!date || !(date instanceof Date)) {
    return null; // Ou tout autre indication d'une erreur
  }
  const newDate = new Date(date.getTime());
  const hours = parseInt(nHours);
  const minutes = (nHours - parseInt(nHours)) * 60;
  newDate.setHours(newDate.getHours() + hours);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
}

export function getArrayDayStr() {
  return [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ]
}

export function getArrayDayJson() {
  return [
    { value: 0, text: "Tous" },
    { value: 1, text: "Lundi" },
    { value: 2, text: "Mardi" },
    { value: 3, text: "Mercredi" },
    { value: 4, text: "Jeudi" },
    { value: 5, text: "Vendredi" },
    { value: 6, text: "Samedi" },
    { value: 7, text: "Dimanche" },
  ];
}

export function getDateFromDayOfYear(dayOfYear, year) {
  if (typeof dayOfYear !== "number" || typeof year !== "number") {
    throw new Error("Les paramètres doivent être des nombres.");
  }
  if (dayOfYear < 1 || (dayOfYear > 365 && !isLeapYear(year)) || dayOfYear > 366) {
    throw new Error("Le jour de l'année est invalide pour l'année donnée.");
  }

  // Crée une date le 1er janvier de l'année spécifiée
  const date = new Date(year, 0, dayOfYear);
  return date;
}

export function getDayOfYear(date) {
  if (!(date instanceof Date)) {
    throw new Error("Le paramètre doit être un objet Date.");
  }

  // Crée une date pour le 1er janvier de la même année
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  // Calcule la différence en millisecondes entre la date et le 1er janvier
  const diffInMs = date - startOfYear;

  // Convertit la différence en jours
  const dayOfYear = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1; // +1 car le 1er janvier = jour 1

  return dayOfYear;
}

/**
* Vérifie si une année est bissextile
* @param {number} year - L'année à vérifier
* @returns {boolean} - true si l'année est bissextile, false sinon
*/
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function getWeek(date) {
  //const currentDate = new Date();
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
  const week = Math.ceil((days + startOfYear.getDay() + 1) / 7);
  return week;
}

export function getFirstAndLastDayOfWeek(year, weekNumber) {
  // Calculer le 1er janvier de l'année
  const firstDayOfYear = new Date(year, 0, 1);

  // Trouver le premier lundi de l'année
  const firstMonday = new Date(
    firstDayOfYear.setDate(
      firstDayOfYear.getDate() + ((1 - firstDayOfYear.getDay() + 7) % 7)
    )
  );

  // Calculer le premier jour de la semaine donnée
  const firstDayOfWeek = new Date(
    firstMonday.setDate(firstMonday.getDate() + (weekNumber - 1) * 7)
  );

  // Calculer le dernier jour de la semaine donnée (dimanche)
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  return {
    firstDay: firstDayOfWeek,
    lastDay: lastDayOfWeek,
  };
}
export function getStartAndEndOfDay(year, dayOfYear) {
  // Créer une date au 1er janvier de l'année spécifiée
  const startOfYear = new Date(year, 0, 1); // Mois = 0 car janvier est le mois 0 en JS

  // Ajouter le nombre de jours pour obtenir le jour de l'année spécifié
  const startOfDay = new Date(startOfYear);
  startOfDay.setDate(startOfYear.getDate() + dayOfYear - 1);

  // Créer une date pour la fin de la journée (23h59)
  const endOfDay = new Date(startOfDay);
  endOfDay.setHours(23, 59, 59, 999); // 23h59m59s999ms

  return { startOfDay, endOfDay };
}

export function removeMinutesToDate(date, nMinutes = 0) {
  if (!date || !(date instanceof Date)) {
    //console.error("Invalid date object");
    return null; // Ou tout autre indication d'une erreur
  }

  const newDate = new Date(date.getTime());
  newDate.setMinutes(newDate.getMinutes() - nMinutes);
  return newDate;
}

export function formatDateToInputDate(date) {
  const d = new Date(date); // Crée un objet Date
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Mois 0-indexé
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}