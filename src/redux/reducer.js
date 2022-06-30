import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART,REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  /* if(action.type === Add_To_CART){
        console.warn("reducer called",action)
        return action.data
    }else{
        return "no action matched"
    }*/

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART CONDITION", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn(" REMOVE_TO_CART CONDITION", action);
     // data.length = data.length ? data.length - 1 : [];

     const remainingItem = data.filter((item)=>item.id!==action.data)
     console.warn('remaining item',remainingItem)
      return [...remainingItem];

    case EMPTY_CART:
      console.warn(" EMPTY_TO_CART CONDITION");
      data = [];
      return [...data];
    default:
      return data;
  }
};
