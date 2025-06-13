import React from 'react';
import { Link } from 'react-router-dom';
import './CustomButton.scss';

const CustomButton = ({label, icon='', type='', redirectTo=undefined, callback=undefined, data=undefined}) => {
  const iconClassName = icon ? `pi ${icon}` : '';


  const buttonContent = (
    <div className="CustomButton">
      {icon && <i className={iconClassName}/>}
      <div>{label}</div>
    </div>
  )
  
  return (
    <React.Fragment>
      { type==='redirect' ? 
        <Link to={redirectTo} state={data}>
          {buttonContent}
        </Link> 
        : 
        <div onClick={callback}>
          {buttonContent}
        </div>
      }
    </React.Fragment>
  
)};

export default CustomButton;
