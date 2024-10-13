// import React from 'react';
// import Chart from 'react-apexcharts';

// const TimeSeriesChart = ({ data }) => {
//   const chartData = data.map((record) => {
//     const bookingDate = new Date(
//       record.arrival_date_year,
//       record.arrival_date_month - 1,
//       record.arrival_date_day_of_month
//     );
//     return [bookingDate.getTime(), Number(record.adults) + Number(record.children) + Number(record.babies)];
//   });

//   const options = {
//     chart: { type: 'line' },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       title: {
//         text: 'Visitors',
//       },
//     },
//     tooltip: {
//       x: {
//         format: 'dd MMM yyyy',
//       },
//     },
//   };

//   return (
//     <Chart
//       options={options}
//       series={[{ name: 'Visitors', data: chartData }]}
//       type="line"
//       height={350}
//     />
//   );
// };

// export default TimeSeriesChart;


import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const chartData = data.map(record => {
    const date = new Date(
      record.arrival_date_year,
      record.arrival_date_month - 1,
      record.arrival_date_day_of_month
    );
    const visitors = +record.adults + +record.children + +record.babies;
    return [date.getTime(), visitors];
  });

  const options = {
    chart: { type: 'line' },
    xaxis: { type: 'datetime' },
    yaxis: { title: { text: 'Visitors' } },
    tooltip: { x: { format: 'dd MMM yyyy' } },
  };

  return <Chart options={options} series={[{ name: 'Visitors', data: chartData }]} type="line" height={350} />;
};

export default TimeSeriesChart;
