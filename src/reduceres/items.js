import data from "./data.json";
let items = data;

let initialState = {
  customerId: null,
  items,
  categories: {
    food:{
      name: "food",
      displayName: "FOOD",
      description: "A food with a sharp taste",
    },
    electronics:{
      name: "electronics",
      displayName: "ELECTRONICS",
      description: "Whatever you need",
    },
   }
};

const itemsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INITIALIZE":
      return { ...state, customerId: payload.id };

    default:
      return state;
  }
};

export default itemsReducer;
