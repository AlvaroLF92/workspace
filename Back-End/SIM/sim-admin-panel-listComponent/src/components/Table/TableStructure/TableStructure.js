import React from 'react';
import './TableStructure.scss';

const TableStructure = (props) => {


  const _data = props.data;
  
  const createHeader = () => {
    if (props.header) {
      const headerStructure = props.header();
        return <div className="table-header">{headerStructure}</div>
    }
    return null;
  }

  const createItem = (_value, index) => {
    return props.rowItem ? 
    (
      <div key={_value.id}>
        <props.rowItem data={_value} updateActive={props.updateActive} remove={props.remove} dataType={props.dataType}/>
      </div>)
    : null;
  }
  
  const createContent = () => {
    const content = _data ? _data.map(createItem) : null;

    return (
      <div className="table-row-item">
            {content}
        </div>
    )
  }


  const header = createHeader();
  const rowItems = createContent();
  
  return (
  <div className="TableStructure">
    {header}
    <hr/>
    {rowItems}
    <hr/>
  </div>
)};

export default TableStructure;
