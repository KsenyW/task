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

const BASE = 'https://www.praxis.nl/search-service/rest/v1';

export const fetchList = (params) => dispatch => {
  axios.get(`${BASE}/products`, { params })
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