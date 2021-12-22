
let initialState = { num:0, items : []};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      for (let i = 0; i < state.items.length; i++) {
        if(state.items[i].name === payload.item.name){
          state.items[i].qtyCart++;
          return { items:[...state.items], num: state.num+1 };
        }
      }
      return { items:[...state.items, payload.item], num: state.num+1 };
      
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;