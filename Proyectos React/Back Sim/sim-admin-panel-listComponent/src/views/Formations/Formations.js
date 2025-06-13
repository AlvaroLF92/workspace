import CustomButton from 'components/CustomButton/CustomButton';
import { TableFormationHeader } from 'components/Table/Formations/TableFormationHeader';
import { TableFormationRow } from 'components/Table/Formations/TableFormationRow';
import TableStructure from 'components/Table/TableStructure/TableStructure';
import TablePageLayout from 'layouts/TablePageLayout/TablePageLayout';
import { useRemoveFormation, useSetFormationVisible } from 'mutations/formationsMutations';
import React from 'react';
import { useQuery } from 'react-query';
import { getFormations } from 'services/formationsService';
import './Formations.scss';

const Formations = () => {
  let {data, isLoading} = useQuery(["formations"], getFormations);
  const { mutate: removeFormation } = useRemoveFormation();
  const { mutate: updateFormationVisible } = useSetFormationVisible();

  const newFormationData = {
    dataType: "formation",
    labelNew: "Datos nueva ",
    labelDataType: "formación",
  }
  let formationHeader = () => (<CustomButton label="Nueva Formación" icon="pi-plus" type="redirect" redirectTo='/newFormation' data={newFormationData}/>);

  let formationBody = () => (<TableStructure data={data} header={TableFormationHeader} rowItem={TableFormationRow} remove={removeFormation} updateActive={updateFormationVisible} dataType={'formation'}/>);

  return (
    <TablePageLayout isLoading={isLoading} header={formationHeader()} body={formationBody()}/>
)};

export default Formations;
