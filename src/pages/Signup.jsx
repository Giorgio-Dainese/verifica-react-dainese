import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";



import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { SiTodoist } from "react-icons/si";
import { useEffect } from "react";

function Signup() {
  const [nome,setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");
  const navigate = useNavigate();



  function changePasswordInputType() {
    if (passwordInputType === "text") {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  }


  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfermaPasswordChange(event) {
    setConfermaPassword(event.target.value);
  }

  function validateEmail(em) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(em);
  }
  

  function validatePassword(pw) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(pw);
  }

  

  function controllerCredenziali(){
    let controllo = false;
    if(password === confermaPassword && validatePassword(password) && validateEmail(email) && nome.length>2){
      alert("Le credenziali rispettano i vincoli");
      localStorage.setItem(nome, JSON.stringify({nome,email,password}))
      navigate("/login");
     }else alert("Le credenziali NON rispettano i vincoli")

  }

  return (
    <div>
      <Header title="Signup" icon={<DashboardIcon />} to="/" />
      <Card>
        <h1 className="text-2xl">Signup</h1>
        <hr className="h-1 w-32 bg-dark-green" />
        <form className="w-full">
          <div className="w-full">
          <Input type="text" placeholder="nome"  value={nome} onChange={event => setNome(event.target.value)} />
          </div>
          <div className="w-full">
            <Input type="email" placeholder="example@test.com" value={email} onChange={event => setEmail(event.target.value)} />
          </div>
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="password" value={password} onChange={handlePasswordChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="conferma password" value={confermaPassword} onChange={handleConfermaPasswordChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          {/* Button div */}
          <div className="w-full">
            <Button title="Signup" onClick={controllerCredenziali }/>   
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Signup;
