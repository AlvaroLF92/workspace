import React from 'react';
import { useQuery } from 'react-query';
import CustomButton from 'components/CustomButton/CustomButton';
import TableStructure from 'components/Table/TableStructure/TableStructure';
import { TableMonitorsCentersHeader } from 'components/Table/MonitorsCenters/TableMonitorsHeader';
import { TableMonitorsCentersRow } from 'components/Table/MonitorsCenters/TableMonitorsCentersRow';
import TablePageLayout from 'layouts/TablePageLayout/TablePageLayout';
import { getCenters } from 'services/centersService';
import { useRemoveCenter, useSetCenterActive } from 'mutations/centersMutations';
import './Centers.scss';

const Centers = () => {
  let {data, isLoading} = useQuery(["centers"], getCenters);
  const { mutate: removeCenter } = useRemoveCenter();
  const { mutate: updateCenterActive } = useSetCenterActive();

  const newCenterData = {
    dataType: "center",
    labelNew: "Datos nuevo ",
    labelDataType: "centro",
  }

  let centerHeader = () => (<CustomButton label="Nuevo Centro" icon="pi-plus" type="redirect" redirectTo='/newCenter' data={newCenterData}/>);

  let centerBody = () => (<TableStructure data={data} header={TableMonitorsCentersHeader} rowItem={TableMonitorsCentersRow} remove={removeCenter} updateActive={updateCenterActive} dataType={'center'}/>);

  return (
    <TablePageLayout isLoading={isLoading} header={centerHeader()} body={centerBody()}/>
)};

export default Centers;
