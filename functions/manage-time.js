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

export function addHoursToDate(date, nHours = 0) {
  if (!date || !(date instanceof Date)) {
    return null; // Ou tout autre indication d'une erreur
  }
  const newDate = new Date(date.getTime());
  newDate.setHours(newDate.getHours() + nHours);
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