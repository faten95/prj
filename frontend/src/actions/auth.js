// import axios from 'axios'
// import { REGISTER_SUCCESS, REGISTER_FAIL } from './types.js'

// //Register user
// export const register = ({ name, pseudo, email, password, adress }) => async (
//   dispatch
// ) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }
//   const body = JSON.stringify({ name, pseudo, email, password, adress })
//   try {
//     const res = await axios.post('api/users', body, config)
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data,
//     })
//   } catch (err) {
//     dispatch({
//       type: REGISTER_FAIL,
//     })
//   }
// }
