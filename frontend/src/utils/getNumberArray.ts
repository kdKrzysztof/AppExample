/**
 * @param {number} to This parameter is required. Target value up to which the array should be generated.
 * @param {number} from This parameter is optional. If provided, it specifies the starting value for the array. The function will start generating the array from this value. If "from" is not provided, the function will default to starting from 1.
 * @returns {array}
 */

const getNumberArray = (to: number, from?: number) => {
  return Array.from({ length: from ? to - from + 1 : to }, (_, index) =>
    from ? from + index : index + 1
  );
};

export default getNumberArray;
