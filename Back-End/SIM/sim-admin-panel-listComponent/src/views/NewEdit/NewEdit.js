import React from 'react';
import FormMonitorCenter from 'components/FormMonitorCenter/FormMonitorCenter';
import { useLocation, useNavigate } from 'react-router-dom';
import { NewMonitorCenterFormInitialValues } from 'views/NewEdit/data/NewMonitorCenterFormInitialValues';
import { MonitorCenterValuesValidations } from 'views/NewEdit/data/MonitorCenterValuesValidations';
import { MonitorsCenterSchema } from 'views/NewEdit/data/MonitorCenterSchema';
import { useCreateMonitor, useUpdateMonitor } from 'mutations/monitorsMutations';
import { useCreateCenter, useUpdateCenter } from 'mutations/centersMutations';
import { useCreateClass, useUpdateClass } from 'mutations/classesMutations';
import { NewClassFormInitialValues } from './data/NewClassFormInitialValues';
import { ClassValuesValidations } from './data/ClassValuesValidations';
import { ClassSchema } from './data/ClassSchema';
import './NewEdit.scss';
import { useCreateFormation, useUpdateFormation } from 'mutations/formationsMutations';
import { NewFormationFormInitialValues } from './data/NewFormationFormInitialValues';
import { FormationValuesValidations } from './data/FormationValuesValidations';
import { FormationSchema } from './data/FormationSchema';

const NewEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: createMonitor } = useCreateMonitor(() => navigate(-1));
  const { mutate: updateMonitor } = useUpdateMonitor(() => navigate(-1));
  const { mutate: createCenter } = useCreateCenter(() => navigate(-1));
  const { mutate: updateCenter } = useUpdateCenter(() => navigate(-1));
  const { mutate: createClass } = useCreateClass(() => navigate(-1));
  const { mutate: updateClass } = useUpdateClass(() => navigate(-1));
  const { mutate: createFormation } = useCreateFormation(() => navigate(-1));
  const { mutate: updateFormation } = useUpdateFormation(() => navigate(-1));
  // @ts-ignore
  const locationProps = {...location.state};

  const allProps = () => ({
    ...locationProps,
    ...createAndFormData()
  });

  const createAndFormData = () => {
    if(locationProps.dataType === "monitor") { 
      return {
        formInitialValues: NewMonitorCenterFormInitialValues,
        formValidationSchema: MonitorCenterValuesValidations,
        formSchema: MonitorsCenterSchema,
        useCreate: createMonitor,
        useUpdate: updateMonitor,
      }
    } else if (locationProps.dataType === "center") { 
      return {
        formInitialValues: NewMonitorCenterFormInitialValues,
        formValidationSchema: MonitorCenterValuesValidations,
        formSchema: MonitorsCenterSchema,
        useCreate: createCenter,
        useUpdate: updateCenter,
      }
    } else if (locationProps.dataType === "class") {
      return {
        formInitialValues: NewClassFormInitialValues,
        formValidationSchema: ClassValuesValidations,
        formSchema: ClassSchema,
        useCreate: createClass,
        useUpdate: updateClass,
      }
    } else if (locationProps.dataType === "formation") {
      return {
        formInitialValues: NewFormationFormInitialValues,
        formValidationSchema: FormationValuesValidations,
        formSchema: FormationSchema,
        useCreate: createFormation,
        useUpdate: updateFormation,
      }
    }
  }

  return (
    <div>
      <FormMonitorCenter {...allProps()}/>
    </div>
)};

export default NewEdit;
