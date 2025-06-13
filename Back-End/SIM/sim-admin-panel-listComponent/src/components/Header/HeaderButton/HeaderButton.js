import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderButton.scss';

const HeaderButton = ({label, redirectTo, active, setActive}) => {

  return(
  <div className={`HeaderButton ${active===redirectTo ? 'selected' : ''}`} onClick={() => setActive(redirectTo)}>
    <Link to={redirectTo}><div className="ButtonText">{label}</div></Link>
  </div>
)};

export default HeaderButton;
