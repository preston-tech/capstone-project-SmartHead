import React, {Component} from 'react';

import Calender from "../Scheduling/calender";

export default class Scheduling extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="schedule-container">
        <Calender/>
      </div>
    )
  }
}