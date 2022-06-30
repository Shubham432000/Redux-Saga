import { addToCart } from "../redux/action";
import { removeToCart } from "../redux/action";
import { emptyCart } from "../redux/action";

import { useDispatch } from "react-redux";

import { productList } from "../redux/productAction";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main  componenet from saga", data);

  console.warn("data in main component", data);
  const product = {
    name: "samsung",
    type: "mobile",
    color: "red",
    price: 10000,
  };

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        add Tocart
      </button>

      <button
        onClick={() => {
          dispatch(removeToCart(product));
        }}
      >
        remove Tocart
      </button>

      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        empty Tocart
      </button>

      <div>
        <button
          onClick={() => {
            dispatch(productList());
          }}
        >
          Get product List
        </button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name:{item.name}</div>
            <div>Color:{item.color}</div>
            <div>Price:{item.price}</div>
            <div>Category:{item.category}</div>
            <div>Brand:{item.brand}</div>
            <div>
              <button
              
                onClick={() => {
                  dispatch(addToCart(item));
                  console.log('item called',item)
                }}
              >
                
                Add To Cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeToCart(item.id));
                }}
              >
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
