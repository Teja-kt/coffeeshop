import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
// import Login1 from "./components/user/Login1.js";
import { AppContextProvider } from "./context/appContext.js";
import Logout from "./components/user/Logout.js";
import Footer from "./components/footer/Footer.js"

export const UserContext = createContext(null);
function App() {
  const [user, setuser] = useState({});
  const [logged, setlogged] = useState(false);
  const [registers, setregisters] = useState({})
  const [register, setRegister] = useState({});


  const val = { user, setuser, logged, setlogged, registers, setregisters, register, setRegister};
  return (
    <div className="App">
      <UserContext.Provider value={val}>
        {!logged ? (
          <Login />
        ) : (
          <AppContextProvider>
            <Router>
              <Navbar />
              <hr></hr>
              <Routes>
                <Route path="/coffeeshop/" index element={<Products />} />
                <Route path="/coffeeshop/cart" element={<Cart />} />
              </Routes>
              <Footer/>
            </Router>
          </AppContextProvider>
        )}
      </UserContext.Provider>
    </div>
  );
}
export default App;
