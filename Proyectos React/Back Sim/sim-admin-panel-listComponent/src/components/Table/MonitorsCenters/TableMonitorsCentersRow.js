import React from 'react';
import { Link } from 'react-router-dom';
import '../Table.scss';


  export const TableMonitorsCentersRow = ({data, updateActive, remove, dataType}) => {

    const editParams = {
      dataType: dataType,
      labelNew: "Editar ",
      labelDataType: dataType === "monitor" ? "monitor" : "centro",
      objInfo: data
    }

    return (
      <div className="tableRowItem">
        <div className="col-10 tableRowItemEdit">
          <i className={`pi pi-circle-fill ${data.active ? 'active' : 'inactive'}`} onClick={() => updateActive(data)}/>
        </div>
        <div className="col-20 tableRowItemValue">{data.userName}</div>
        <div className="col-20 tableRowItemValue">{data.email}</div>
        <div className="col-20 tableRowItemValue">{data.location}</div>
        <div className="col-10 tableRowItemValue_center">{data.dateCreated}</div>
        <div className="col-10 tableRowItemValue_center">{data.certificateLevel}</div>
        <div className="col-10 tableRowItemEdit">
          <div className="iconEditBox">
            <Link to={dataType === "monitor" ? '/editMonitor' : "/editCenter"} state={editParams}>
              <i className="pi pi-user-edit"/>
            </Link>
          </div>
          <div className="iconEditBox">
            <i className="pi pi-trash inactive" onClick={() => remove(data.id)}/>
          </div>
        </div>
      </div>
    )
  }