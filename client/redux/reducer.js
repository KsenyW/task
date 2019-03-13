import axios from "axios";
import data from '../../data';
import { emulatePagination } from '../helpers/processingFunctions';

/////////////////CONSTANTS/////////////////////
const GET_LIST = "GET_LIST";

/////////////////ACTIONS//////////////
const getList = (list) => ({type: GET_LIST, list});

/////////////////REDUCER/////////////////////
let initial = {
  list: [],
  total: 0
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_LIST:
      return Object.assign({}, state, {
        list: action.list.productsDataList, 
        total: action.list.quantity
      });

    default:
      return state;
  }

};

export default reducer;


/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

// const params = {
//   lang: 'nl_NL',
//   formula: 'praxis',
//   currentPage: '1',
//   viewSize: '24',
//   categoryCode: 'd1_d271_d273',
//   locale: 'nl_NL'
// }

export const fetchList = () => dispatch => {
  axios.get(`https://www.praxis.nl/search-service/rest/v1/products?lang=nl_NL&formula=praxis&currentPage=1&viewSize=24&categoryCode=d1_d271_d273&locale=nl_NL`)
    .then((response) => {
      return response.data;
    })
    .then((list) => {
      dispatch(getList(list))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const emulateList = (params) => dispatch => {
  const paginatedData = emulatePagination(data, params);

  dispatch(getList(paginatedData));
};