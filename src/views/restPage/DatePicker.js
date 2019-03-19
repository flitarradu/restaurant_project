import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div className="p-2">
        <h4 className="p-2 text-muted">Date: &nbsp;&nbsp;
        <DayPickerInput className="pr-2" onDayChange={this.handleDayChange}  /></h4>
        {selectedDay && <p>You picked: {selectedDay.toLocaleDateString()}</p>}
        
        <h4 className="p-2 text-muted">Hour: </h4>
      </div>
    );
  }
}