import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => (
  <div className="LoadingSpinner">
    <i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
  </div>
);

export default LoadingSpinner;
