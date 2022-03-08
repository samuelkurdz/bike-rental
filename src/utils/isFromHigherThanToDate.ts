export const isFromHigherThanToDate = (fromPeriod: string, toPeriod: string) => {
  let fromDate = Date.parse(fromPeriod);
  let toDate = Date.parse(toPeriod);
  if (fromDate > toDate) return true;
  return false;
};
