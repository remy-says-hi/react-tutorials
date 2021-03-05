import { v4 } from 'uuid';
import Moment from 'moment';

const id1 = v4();
const id2 = v4();

export default {
  masterTicketList: {
    [id1]: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: id1,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    },
    [id2]: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: id2, 
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    }
  }
}




// export default { 
//   masterTicketList: {
//     [id1]: {
//       names: 'Ryan & Aimen',
//       location: '4b',
//       issue: 'Redux action is not working correctly.',
//       id: id1,
//       tags: {
//         1: {
//           module: "react",
//           topic: "redux"
//         },
//         2: {
//           module: "react",
//           topic: "actions"
//         },
//         3: {
//           module: "react",
//           topic:"bugs"
//         }
//       }   
//     }
//   }
// }