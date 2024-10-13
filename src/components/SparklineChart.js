// import React from 'react';
// import Chart from 'react-apexcharts';

// const SparklineChart = ({ data }) => {
//   const adultsData = data.map((record) => Number(record.adults));
//   const childrenData = data.map((record) => Number(record.children));

//   const sparklineOptions = {
//     chart: {
//       type: 'line',
//       sparkline: { enabled: true },
//     },
//     stroke: { curve: 'smooth' },
//     colors: ['#D18700'], // Orange line for both sparklines
//     tooltip: { enabled: false },
//   };

//   return (
//     <div className="sparkline-charts">
//       <div>
//         <Chart
//           options={sparklineOptions}
//           series={[{ name: 'Adults', data: adultsData }]}
//           type="line"
//           height={100}
//         />
//       </div>
//       <div>
//         <Chart
//           options={sparklineOptions}
//           series={[{ name: 'Children', data: childrenData }]}
//           type="line"
//           height={100}
//         />
//       </div>
//     </div>
//   );
// };

// export default SparklineChart;




import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data }) => {
  const adults = data.map(record => +record.adults);
  const children = data.map(record => +record.children);

  const options = {
    chart: { type: 'line', sparkline: { enabled: true } },
    stroke: { curve: 'smooth' },
    colors: ['#ff7043'],
    tooltip: { enabled: false },
  };

  return (
    <div className="sparkline-container">
      <Chart options={options} series={[{ name: 'Adults', data: adults }]} type="line" height={80} />
      <Chart options={options} series={[{ name: 'Children', data: children }]} type="line" height={80} />
    </div>
  );
};

export default SparklineChart;
