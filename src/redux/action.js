import { ADD_TO_CART, REMOVE_TO_CART,EMPTY_CART,REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
    console.warn("action REMOVE called", data);
    return {
      type: REMOVE_FROM_CART,
      data: data,
    };
  };

  export const emptyCart = () => {
    console.warn("action EMPTY called");
    return {
      type: EMPTY_CART,
      
    };
  };
