import LoadingHoc from "hocs/LoadingHoc/LoadingHoc";
import React from "react";
import "./TablePageLayout.scss";

const TablePageLayout = ({ header, body, isLoading }) => (
  <div className="TablePageLayout">
    <LoadingHoc isLoading={isLoading}>
      <div className="layoutHeader">{header}</div>
      <div className="layoutBody">{body}</div>
    </LoadingHoc>
  </div>
);
export default TablePageLayout;
