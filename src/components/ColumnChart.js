// import React from 'react';
// import Chart from 'react-apexcharts';

// const ColumnChart = ({ data }) => {
//   const chartData = data.reduce((acc, record) => {
//     const total_Visitors =
//       Number(record.adults) + Number(record.children) + Number(record.babies);
//     acc[record.country] = (acc[record.country] || 0) + total_Visitors;
//     return acc;
//   }, {});

//   const options = {
//     chart: { type: 'bar' },
//     xaxis: { categories: Object.keys(chartData) },
//     colors: ['#D18700'], // Orange bars
//   };

//   return (
//     <div className="column-chart-container">
//       <Chart
//         options={options}
//         series={[{ name: 'Visitors', data: Object.values(chartData) }]}
//         type="bar"
//         height={350}
//       />
//     </div>
//   );
// };

// export default ColumnChart;






import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const visitorsByCountry = data.reduce((acc, record) => {
    const totalVisitors = +record.adults + +record.children + +record.babies;
    acc[record.country] = (acc[record.country] || 0) + totalVisitors;
    return acc;
  }, {});

  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: Object.keys(visitorsByCountry) },
    colors: ['#ff7043'],
  };

  return (
    <div className="chart-container">
      <Chart
        options={options}
        series={[{ name: 'Visitors', data: Object.values(visitorsByCountry) }]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
