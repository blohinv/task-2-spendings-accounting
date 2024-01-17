export const convertDate = (dateToConvert) => {
  let date = new Date(dateToConvert);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return { day: day, month: month, year: year };
}