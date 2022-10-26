import DateRangePicker from '@wojtekmaj/react-daterange-picker';
export default function BasicDateRangePicker({required, value, onChange}) {
  return (
    <DateRangePicker onChange={onChange} value={value} 
      rangeDivider="to "
      className="shadow-sm bg-blue-dark border text-mercury-600 hover:text-mercury-800 text-base rounded-lg p-2.5 text-center content-center md:w-96"
      required={required}
    />
  );
}