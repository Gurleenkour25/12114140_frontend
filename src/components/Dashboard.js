// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ColumnChart from './ColumnChart';
// import SparklineChart from './SparklineChart';
// import TimeSeriesChart from './TimeSeriesChart';

// const monthMap = {
//   January: 0,
//   February: 1,
//   March: 2,
//   April: 3,
//   May: 4,
//   June: 5,
//   July: 6,
//   August: 7,
//   September: 8,
//   October: 9,
//   November: 10,
//   December: 11,
// };

// const Dashboard = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/hotel_bookings_1000.csv');
//       const data = await response.text();
//       const parsedData = Papa.parse(data, {
//         header: true,
//         skipEmptyLines: true,
//       });
//       setData(parsedData.data);
//       setFilteredData(parsedData.data);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (startDate && endDate) {
//       const filteredData = data.filter((record) => {
//         const bookingDate = new Date(
//           record.arrival_date_year,
//           monthMap[record.arrival_date_month],
//           record.arrival_date_day_of_month
//         );
//         const start = new Date(startDate);
//         const end = new Date(endDate);
//         return bookingDate >= start && bookingDate <= end;
//       });
//       setFilteredData(filteredData);
//     } else {
//       setFilteredData(data);
//     }
//   }, [startDate, endDate, data]);

//   return (
//     <div className="dashboard">
//       <div className="dashboard-heading">Hotel Booking Dashboard</div> {/* Updated heading */}
//       <div className="date-range-picker">
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           selectsStart
//           startDate={startDate}
//           endDate={endDate}
//           placeholderText="Start Date"
//         />
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           selectsEnd
//           startDate={startDate}
//           endDate={endDate}
//           minDate={startDate}
//           placeholderText="End Date"
//         />
//       </div>

//       {filteredData.length > 0 ? (
//         <div>
//           <TimeSeriesChart data={filteredData} />
//           <ColumnChart data={filteredData} />
//           <SparklineChart data={filteredData} />
//         </div>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';
import TimeSeriesChart from './TimeSeriesChart';

const monthNames = {
  January: 0, February: 1, March: 2, April: 3, May: 4,
  June: 5, July: 6, August: 7, September: 8, October: 9,
  November: 10, December: 11,
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const loadCSVData = async () => {
      const response = await fetch('/hotel_bookings_1000.csv');
      const csvData = await response.text();
      const parsed = Papa.parse(csvData, { header: true, skipEmptyLines: true });
      setData(parsed.data);
      setFilteredData(parsed.data);
    };
    loadCSVData();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = data.filter(record => {
        const bookingDate = new Date(
          record.arrival_date_year,
          monthNames[record.arrival_date_month],
          record.arrival_date_day_of_month
        );
        return bookingDate >= startDate && bookingDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [startDate, endDate, data]);

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Hotel Booking Dashboard</h2>
      <div className="date-picker-container">
        <DatePicker selected={startDate} onChange={setStartDate} placeholderText="Start Date" />
        <DatePicker selected={endDate} onChange={setEndDate} minDate={startDate} placeholderText="End Date" />
      </div>
      {filteredData.length ? (
        <>
          <TimeSeriesChart data={filteredData} />
          <ColumnChart data={filteredData} />
          <SparklineChart data={filteredData} />
        </>
      ) : (
        <p>No data available for the selected range.</p>
      )}
    </div>
  );
};

export default Dashboard;
