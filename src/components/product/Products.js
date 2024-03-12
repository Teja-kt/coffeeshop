import React, { useContext } from "react";
import { AppContext } from "../../context/appContext.js";
import products from "./products.json"
import "./Product.css"
export default function Products() {
  const { cartItems, setCartItems } = useContext(AppContext);

  const addtoCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    console.log(cartItems[id]);
    console.log(cartItems);
  };

  return (
    <div className="Product-container">
      {products &&
        products.map((value) => (
          <div key={value.id} className="Product-items">
            <div><img className="Product-img" src={value.image} alt={value.name}/></div>
            <h3>{value.name}</h3>
            <p style={{textAlign:"justify",padding:"10px"}}>{value.desc}</p>
            <div className="priceBtn">
            <div className="priceTxt">₹{value.price}</div>
            <button className="Product-button" onClick={() => addtoCart(value.id)}>Add</button>
            </div>
          </div>
        ))}
    </div>
  );
}
