
let initialState = { num:0, items : []};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      return { items:[...state.items, payload.item], num: state.num+1 };
      
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;