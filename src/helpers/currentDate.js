// this function was inspired by https://surajsharma.net/blog/javascript-get-yesterday-date
const getYesterdayDate = (d) => new Date(d.getTime() - 24 * 60 * 60 * 1000);

const currentDateFormatted = () => {
  let d = new Date();

  if (d.getUTCHours() <= 9) {
    // get from the previous day in case it is not updated
    d = getYesterdayDate(d);
  }

  const currentDate = d.toLocaleString('en-ZA', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\//g, '-');

  return currentDate;
};

const DATE = currentDateFormatted();

export default DATE;
