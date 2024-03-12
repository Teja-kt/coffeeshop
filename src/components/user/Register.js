import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import './Register.css'

const Register = () => {
    const { logged, setlogged } = useContext(UserContext);
    const { user, setuser } = useContext(UserContext);
    const { register, setRegister } = useContext(UserContext);
    const [registers, setregisters] = useState([])
    // const { logged, setlogged } = useContext(UserContext);
    const [visible, setvisible] = useState(false);
    const handleSubmit = () => {
        // setuser((prev)=>({...prev,...{name:users.name}}))
        // setlogged(!logged)
        // console.log(users.name);
        setRegister((prev)=>({...prev,...registers}))
        console.log(register);
        // setRegister((prev)=>({...prev,...{name:registers.name}}))
        // console.log(register);
            setlogged(!logged)
        
        
      }; 

    const handleName = (e) => {
        setregisters((prev) => ({
            ...prev,
            ...{ name: e.target.value },
          }));
          console.log(registers);
    }
    const handleEmail = (e) => {
        setregisters((prev) => ({
            ...prev,
            ...{ email: e.target.value },
          }));
          console.log(registers);
    }
    const handlePass = (e) => {
        setregisters((prev) => ({
            ...prev,
            ...{ password: e.target.value },
          }));
          console.log(registers);
    }
  return (
    <>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Rigister-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={() => setvisible(() => !visible)} className="close">
            &times;
          </div>
        </div>
    <input type='text' placeholder="Enter Name" onChange={handleName}></input><br></br>
    <input type='email' placeholder="Enter Email" onChange={handleEmail}></input><br></br>
    <input type='password' placeholder="Enter Password" onChange={handlePass}></input><br></br>
    <button onClick={handleSubmit} >Submit</button>
    {/* onClick={() => setlogged(() => !logged)} */}
    </div>
    </div>
    </>
  )
}

export default Register