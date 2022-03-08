export const isDateWithInRange = (fromPeriod: string, toPeriod: string, checkPeriod: string) => {
  let fromDate = Date.parse(fromPeriod);
  let toDate = Date.parse(toPeriod);
  let checkDate = Date.parse(checkPeriod);
  if (checkDate <= toDate && checkDate >= fromDate) return true;
  return false;
};
