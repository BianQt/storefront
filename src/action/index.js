
export const newItems = customer => {
    return {
      type: 'INITIALIZE',
      payload: customer,
    };
  };

  export const addItem = item => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };