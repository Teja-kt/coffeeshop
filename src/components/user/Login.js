import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import Register from "./Register";
export default function Login() {
  const { user, setuser } = useContext(UserContext);
  const { logged, setlogged } = useContext(UserContext);
  const { register, setRegister } = useContext(UserContext);
  const [visible, setvisible] = useState(false);
  const [users, setusers] = useState({});
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleNewAccount = () => {
    setvisible(true);
  };

  const hadleLogin = () => {
    console.log(users.name);
    console.log(users.password);
    console.log(user.name);
    console.log(user.password);
    console.log(register.name);
    console.log(register.password);
    setuser((prev) => ({ ...prev, ...users }));
    // console.log(user.password);
    console.log((register.name === user.name=== userName));
    if (
      (register.name === user.name ) &&
      (register.password === user.password)
    ) {
      setlogged(!logged);
    }
  };

  // const handleName = (e) => {
  //   setusers((prevStudent) => ({
  //     ...prevStudent,
  //     ...{ name: e.target.value },
  //   }));
  //   console.log(users);
  // };
  const handleName = (e) => {
    setUserName((prev) => e.target.value);

    setusers((prevStudent) => ({
      ...prevStudent,
      ...{ name: e.target.value },
    }));

    setuser((prev) => ({ ...prev, ...users }));
    console.log(users);
  };
  const handlePassword = (e) => {
    setUserPassword((prev) => e.target.value);

    setusers((prevStudent) => ({
      ...prevStudent,
      ...{ password: e.target.value },
    }));

    setuser((prev) => ({ ...prev, ...users }));
    console.log(users);
  };

  // const handlePassword = (e) => {
  //   setusers((prevStudent) => ({
  //     ...prevStudent,
  //     ...{ password: e.target.value },
  //   }));
  //   console.log(users);
  // };

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
          <button className="newAccBtn" onClick={handleNewAccount}>
            Create new account
          </button>
        </div>
        {visible && <Register />}
      </div>
    </div>
  );
}
