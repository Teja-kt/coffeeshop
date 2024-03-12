import { createContext, useState } from "react";
export const UserContext = createContext(null);
export const UserContextProvider = (props) => {
  const [user, setuser] = useState({});
  const [users, setUsers] = useState({});
  const [registers, setregisters] = useState({})
  const [register, setRegister] = useState({});
  const [flag, setflag ] = useState(true);
  const val = { user, setuser, register, setRegister, users, setUsers, flag, setflag,registers, setregisters};
  return (
    <UserContext.Provider value={val}>
      {props.children}
    </UserContext.Provider>
  );
};
