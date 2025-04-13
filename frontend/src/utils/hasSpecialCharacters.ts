/**
 * Checks if the input string contains special characters.
 *
 * Special characters include: ! @ # $ % ^ & * ( ) _ + { } [ ] : ; < > , . ? ~ \
 *
 * @param {string} input - The string to be checked for special characters.
 * @returns {boolean} True if the input string contains at least one special character, otherwise false.
 */

const hasSpecialCharacters = (input: string) => {
  const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
  return specialCharacters.test(input);
};

export default hasSpecialCharacters;
