import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
export default function Login() {
  const { user, setuser } = useContext(UserContext);
  const [visible, setvisible] = useState(false);
  const [users, setusers] = useState({});

  const hadleLogin = () => {
    // if (users.name && users.password) {
    //   setuser(users);
    // }
    // setuser((prevStudent) => ({
    //   ...prevStudent,
    //   ...{name : users.name, password: users.password },
    // }));
    setuser((prev)=>({...prev,...{name:users.name}}))
    // setuser((prev)=>({...prev,...{password:users.password}}))
    console.log(users.name);
  };

  const handleName = (e) => {
    setuser((prevStudent) => ({
      ...prevStudent,
      ...{ name: e.target.value },
    }));
    // console.log(users);
  };

  const handlePassword = (e) => {
    setuser((prevStudent) => ({
      ...prevStudent,
      ...{ password: e.target.value },
    }));
    // console.log(users);
  };

  // console.log(users);
  return (
    <div className="container">
      <div className="leftBox">
        <div className="title">Irish Cafe</div>
        <br></br>{" "}
        <div className="tagLine">Brewed with elegance, served with grace.</div>
      </div>
      <div className="rightBox">
        <div className="txtBox">
          <input
            placeholder="Enter Username"
            onChange={handleName}
            autoFocus
          ></input>
          {/* onChange={(e) =>
            setusers((prevStudent) => ({
              ...prevStudent,
              ...{ name: e.target.value },
            }))
          } */}
        </div>
        <div className="pwdEye">
          <input
            type={visible ? "text" : "password"}
            placeholder="Enter Passcode"
            onChange={handlePassword}
          ></input>
          {/* onChange={(e) =>
              setusers((prevStudent) => ({
                ...prevStudent,
                ...{ password: e.target.value },
              }))
            } */}
          <span onClick={() => setvisible(() => !visible)}>
            {visible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        <div>
          <button onClick={hadleLogin}>Log in</button>
          {/* () => setuser((prev) => 1) */}
        </div>
        <br></br>
        <div>Forgot Password?</div>
        <br></br>
        <div>
          <button className="newAccBtn">Create new account</button>
        </div>
      </div>
    </div>
  );
}
