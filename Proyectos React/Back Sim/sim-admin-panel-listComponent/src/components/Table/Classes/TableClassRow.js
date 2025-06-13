import React from 'react';
import { Link } from 'react-router-dom';
import '../Table.scss';


  export const TableClassRow = ({data, updateActive, remove, dataType}) => {

    const editParams = {
      dataType: dataType,
      labelNew: "Editar ",
      labelDataType: "clase",
      objInfo: data
    }

    return (
      <div className="tableRowItem">
        <div className="col-10 tableRowItemEdit">
          <i className={`pi pi-circle-fill ${data.visible ? 'active' : 'inactive'}`} onClick={() => updateActive(data)}/>
        </div>
        <div className="col-20 tableRowItemValue">{data.name}</div>
        <div className="col-20 tableRowItemValue">{data.url}</div>
        <div className="col-20 tableRowItemValue">{data.public ? "Público" : "Privado"}</div>
        <div className="col-10 tableRowItemValue_center">{data.dateCreated}</div>
        <div className="col-10 tableRowItemValue_center">{data.certificateLevel}</div>
        <div className="col-10 tableRowItemEdit">
          <div className="iconEditBox">
            <Link to='/editClass' state={editParams}>
              <i className="pi pi-pencil"/>
            </Link>
          </div>
          <div className="iconEditBox">
            <i className="pi pi-trash inactive" onClick={() => remove(data.id)}/>
          </div>
        </div>
      </div>
    )
  }