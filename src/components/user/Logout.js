import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
export default function Logout() {
  // const { user, setuser } = useContext(UserContext);
  // const [logged, setlogged] = useState(false);
  const { logged, setlogged } = useContext(UserContext);

  const handleLogout = () => {
    setlogged((prev)=>!prev)
    console.log(logged);
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {/*  {() => setuser((prev) => null)} */}
    </div>
  );
}
