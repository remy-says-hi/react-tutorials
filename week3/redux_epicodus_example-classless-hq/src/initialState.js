import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();

export default {
  masterTicketList: {
    [id1]: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: id1 
    },
    [id2]: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: id2
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