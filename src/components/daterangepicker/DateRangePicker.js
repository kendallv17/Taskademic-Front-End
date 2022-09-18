import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import React, {useState} from 'react'
export default function BasicDateRangePicker({required}) {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <DateRangePicker onChange={onChange} value={value} 
      rangeDivider="to "
      className="shadow-sm bg-blue-dark border text-mercury-600 text-base rounded-lg p-2.5 text-center content-center md:w-64"
      clearIcon={true}
      calendarIcon={false}
      required={required}
    />
  );
}