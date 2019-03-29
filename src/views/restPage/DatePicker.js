import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimePicker from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker';




export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.onChange = time => this.setState({time});
    this.state = {
      date: new Date()
    };
   this.onChange = date => this.setState({ date });
  }


  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  render() {
        return (
          <></>
    );
  }
}