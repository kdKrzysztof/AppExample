import { useMemo } from 'react'
import { getNumberArray } from 'src/utils';
/**
 * Custom hook to generate arrays for days, months, and years.
 * @returns An object containing arrays for days, months, and years.
 */

const useDateArray = () => {
  const { daysArr, yearsArr, monthsArr } = useMemo(() => {
    const daysArr = getNumberArray(31);
    const monthsArr = getNumberArray(12);
    const yearsArr = getNumberArray(new Date().getFullYear() - 3, 1900).reverse();
    return { daysArr, yearsArr, monthsArr };
  }, []);

  return { daysArr, yearsArr, monthsArr }
}

export default useDateArray