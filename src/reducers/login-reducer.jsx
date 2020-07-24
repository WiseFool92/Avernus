// import * as c from '../actions/ActionTypes';
// import { Login } from '../actions/Login';

// // I am unsure if all of this will click together as intended later
// // Might need to refactor, but is fine as is for now

// let initialState = {
//   isLoading: false,
//   userInfo: {},
//   error: null,
//   login: false,
//   authenticationFail: null
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case c.REQUEST_LOGIN:
//       return Object.assign({}, state, {
//         isLoading: true
//       });
//     case c.GET_LOGIN_SUCCESS:
//       return Object.assign({}, state, {
//         isLoading: false,
//         login: true,
//         userInfo: action.userInfo
//       });
//     case c.GET_LOGIN_FAILURE:
//       return Object.assign({}, state, {
//         isLoading: false,
//         error: action.error,
//         login: false,
//         authenticationFail: true
//       });
//     default:
//       return state;
//   }
// };

