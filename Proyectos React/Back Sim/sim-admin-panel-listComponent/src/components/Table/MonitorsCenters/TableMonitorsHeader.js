import React from 'react';
import '../Table.scss';


  export const TableMonitorsCentersHeader = () => {
    return (
      <div className="tableHeader">
        <div className="col-10 tableHeaderText_center">Activo</div>
        <div className="col-20 tableHeaderText">Nombre</div>
        <div className="col-20 tableHeaderText">Correo</div>
        <div className="col-20 tableHeaderText">Ubicación</div>
        <div className="col-10 tableHeaderText_center">Fecha de alta</div>
        <div className="col-10 tableHeaderText_center">Certificación</div>
        <div className="col-10 tableHeaderText"></div>
      </div>
    )
  }