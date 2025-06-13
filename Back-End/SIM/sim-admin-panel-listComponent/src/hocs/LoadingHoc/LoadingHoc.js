import React from 'react';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import './LoadingHoc.scss';

const LoadingHoc = ({isLoading, children}) => (
  <div className="LoadingHoc">
    { isLoading ? <LoadingSpinner/> : children}
  </div>
);

export default LoadingHoc;