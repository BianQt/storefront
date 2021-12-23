import Model from '../models/Api.Model';
const axios = require('axios');


const getUrl = 'https://bianqt-storefront.herokuapp.com/items';

export const newItems = () =>  dispatch => {
  return axios.get(getUrl).then(res => {
    dispatch(actualData(res.data))
  })
}

function actualData(data) {
  return {
    type: 'INITIALIZE',
    payload: {
      results: data
    }
  }
}


// export const newItems = customer => {
//     return {
//       type: 'INITIALIZE',
//       payload: customer,
//     };
//   };

  export const addItem = item => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };