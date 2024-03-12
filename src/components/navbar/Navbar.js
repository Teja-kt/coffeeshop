import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import App, { UserContext } from "../../App";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const { user, setuser } = useContext(UserContext);
  const { registers, setregisters } = useContext(UserContext);
  const { register, setregister } = useContext(UserContext);
  const { logged, setlogged } = useContext(UserContext);

  const { cartItems } = useContext(AppContext);
  const values = Object.values(cartItems);
  const total = values.reduce((accumulator, elem) => {
    return accumulator + elem;
  }, 0);

  const handleLogout = () => {
    setlogged((prev)=>!prev)
    console.log(logged);
  }
  return (
    <div className="navbar">
      <div className="title">Irish Cafe</div>
      <h3>{user.name}</h3>
      <h3>{register.name}</h3>
      {/* {registers.name!=="" && <h3>{registers.name}</h3>} */}
      <div className="links">
        <Link to="/coffeeshop/"> Products </Link>
        <Link to="/coffeeshop/cart"> Cart({total}) </Link>
        <Link to="/coffeeshop/" onClick={handleLogout}>
          Logout{" "}
        </Link>
      </div>
    </div>
  );
}
