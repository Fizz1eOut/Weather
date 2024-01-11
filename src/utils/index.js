const PRESSURE__UNITS = 0.750062;

export const capitalezeFirsLetter = (str) => {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getPressureMn = (hpa) => {
  return Math.round(hpa * PRESSURE__UNITS);
}

export const getTime = (seconds) =>  {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' });
}