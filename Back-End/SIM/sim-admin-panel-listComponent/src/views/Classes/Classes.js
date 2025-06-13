import CustomButton from 'components/CustomButton/CustomButton';
import { TableClassHeader } from 'components/Table/Classes/TableClassHeader';
import { TableClassRow } from 'components/Table/Classes/TableClassRow';
import TableStructure from 'components/Table/TableStructure/TableStructure';
import TablePageLayout from 'layouts/TablePageLayout/TablePageLayout';
import { useRemoveClass, useSetClassVisible } from 'mutations/classesMutations';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getClasses } from 'services/classesService';
import './Classes.scss';

const Classes = () => {
  let {data, isLoading} = useQuery(["classes"], getClasses);
  const { mutate: removeClass } = useRemoveClass();
  const { mutate: updateClassVisible } = useSetClassVisible();

  const newClassData = {
    dataType: "class",
    labelNew: "Datos nueva ",
    labelDataType: "clase",
  }

  let centerHeader = () => (<CustomButton label="Nueva Clase" icon="pi-plus" type="redirect" redirectTo='/newClass' data={newClassData}/>);

  let centerBody = () => (<TableStructure data={data} header={TableClassHeader} rowItem={TableClassRow} remove={removeClass} updateActive={updateClassVisible} dataType={'class'}/>);

  return (
    <TablePageLayout isLoading={isLoading} header={centerHeader()} body={centerBody()}/>
)};

export default Classes;
