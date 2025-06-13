import React from 'react';
import '../Table.scss';


  export const TableFormationHeader = () => {
    return (
      <div className="tableHeader">
        <div className="col-10 tableHeaderText_center">Visible</div>
        <div className="col-20 tableHeaderText">Nombre</div>
        <div className="col-20 tableHeaderText">Ruta URL</div>
        <div className="col-20 tableHeaderText">Alcance</div>
        <div className="col-10 tableHeaderText_center">Fecha de alta</div>
        <div className="col-10 tableHeaderText_center">Certificación</div>
        <div className="col-10 tableHeaderText"></div>
      </div>
    )
  }