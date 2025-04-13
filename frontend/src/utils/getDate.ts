/**
 * Creates a JavaScript Date object based on the provided day, month, and year.
 *
 * @param {number} day - The day of the month (1-31).
 * @param {number} month - The month (0-11, where 0 represents January and 11 represents December).
 * @param {number} year - The year (e.g., 2023).
 * @returns {Date} A JavaScript Date object representing the specified date.
 */

const getDate = (day: number, month: number, year: number) => {
  return new Date(year, month, day);
};

export default getDate;
