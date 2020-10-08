// import React, {Component} from 'react';

// import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

// class Scheduling extends React.Component {
//   EventSettingModel = {
//     dataSource: [{
//       EndTime: Date(2020, 7 ,13, 6, 30),
//       StartTime: Date(2020, 7 ,14, 8, 30),
//     }]
//   }
//   private remoteData = new DataManager({
//     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
//     adaptor: WebApiAdaptor,
//     crossDomain: true
//   });
//   render() {
//     return <ScheduleComponent currentView="Month" selectedDate={new Date(2020, 7, 13)}>
//       <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//     </ScheduleComponent>
//   }
// }

// export default Scheduling;