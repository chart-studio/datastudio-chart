export const date_YYYY_MM_DD = (newDate: Date) => {
  const newDateTransf = newDate
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("_");

  return newDateTransf;
};
