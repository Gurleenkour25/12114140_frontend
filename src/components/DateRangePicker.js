import React, { useState } from 'react';
import { DateRange } from 'react-date-range';



const DateRangePicker = ({ onDateChange }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
    onDateChange(ranges.selection.startDate, ranges.selection.endDate);
  };

  return (
    <div className="date-range-picker">
      <DateRange
        ranges={range}
        onChange={handleSelect}
        rangeColors={['#3d91ff']}
      />
    </div>
  );
};

export default DateRangePicker;