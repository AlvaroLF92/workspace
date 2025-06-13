import React from 'react';
import CustomButton from 'components/CustomButton/CustomButton';
import TableStructure from 'components/Table/TableStructure/TableStructure';
import { getMonitors } from 'services/monitorsService';
import { useQuery } from 'react-query';
import { useRemoveMonitor, useSetMonitorActive } from 'mutations/monitorsMutations';
import { TableMonitorsCentersHeader } from 'components/Table/MonitorsCenters/TableMonitorsHeader';
import { TableMonitorsCentersRow } from 'components/Table/MonitorsCenters/TableMonitorsCentersRow';
import TablePageLayout from 'layouts/TablePageLayout/TablePageLayout';
import './Monitors.scss';

const Monitors = () => {
  let {data, isLoading} = useQuery(["monitors"], getMonitors);
  const { mutate: removeMonitor } = useRemoveMonitor();
  const { mutate: updateMonitorActive } = useSetMonitorActive();

  const newMonitorData = {
    dataType: "monitor",
    labelNew: "Datos nuevo ",
    labelDataType: "monitor",
  }
  let monitorHeader = () => (<CustomButton label="Nuevo Monitor" icon="pi-plus" type="redirect" redirectTo='/newMonitor' data={newMonitorData}/>);

  let monitorBody = () => (<TableStructure data={data} header={TableMonitorsCentersHeader} rowItem={TableMonitorsCentersRow} remove={removeMonitor} updateActive={updateMonitorActive} dataType={'monitor'}/>);

  return (
    <TablePageLayout isLoading={isLoading} header={monitorHeader()} body={monitorBody()}/>
)};

export default Monitors;