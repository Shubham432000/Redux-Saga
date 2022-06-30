import {PRODUCT_LIST,SEARCH_PRODUCT} from './constant'

export const productList = () => {
   /* let data= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = await data.json()


    console.warn("action is called",data);*/
    return {
      type: PRODUCT_LIST,
      data:'apple'
    };
  };

  export const productSearch = (query) => {
    
     return {
       type: SEARCH_PRODUCT,
       query
     };
   };

 /* export const setproductList = (data) => {
   console.warn("set action")
     return {
       type: SET_PRODUCT_LIST,
       data
     };
   };*/