import React, { useState } from 'react';
import './Header.scss';
import HeaderButton from './HeaderButton/HeaderButton';
import sim_logo from '../../assets/images/sim_logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  let initialPath = window.location.href.replace('http://localhost:3000', '');
  initialPath = initialPath.toLocaleLowerCase().includes("monitor") ? '/monitors' : initialPath;
  initialPath = initialPath.toLocaleLowerCase().includes("center") ? '/centers' : initialPath;
  initialPath = initialPath.toLocaleLowerCase().includes("class") ? '/classes' : initialPath;
  initialPath = initialPath.toLocaleLowerCase().includes("formation") ? '/formations' : initialPath;

  const [active, setActive] = useState(initialPath);
  let navigate = useNavigate();
  
  const setActiveValue = (path) => {
    setActive(path);
  }

  const logOut = () => {
    props.setLoggedIn(false);
    navigate("../login", { replace: true });
  }

  return (
  <div className="Header">
    <Link to={'/home'}>
      <img className="imageLogo" alt="" src={sim_logo} onClick={()=>setActive('')}/>
    </Link>
    <HeaderButton label="Monitores" redirectTo="/monitors" active={active} setActive={setActiveValue}/>
    <HeaderButton label="Centros" redirectTo="/centers"  active={active} setActive={setActiveValue}/>
    <HeaderButton label="Clases" redirectTo="/classes"  active={active} setActive={setActiveValue}/>
    <HeaderButton label="Formaciones" redirectTo="/formations"  active={active} setActive={setActiveValue}/>
    <i className="pi pi-sign-out" onClick={()=> logOut()}></i>
  </div>
)};

export default Header;
