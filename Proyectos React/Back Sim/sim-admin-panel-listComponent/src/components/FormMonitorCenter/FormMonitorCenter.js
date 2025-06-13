import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import LoadingHoc from "hocs/LoadingHoc/LoadingHoc";
import "./FormMonitorCenter.scss";

const FormMonitorCenter = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!props.objInfo;

  const headerText = `
    ${isEditing ? "Editar " : props.labelNew}${props.labelDataType}`;

  return (
    <div className="FormMonitorCenter">
      <LoadingHoc isLoading={isLoading}>
        <div className="FormMonitorCenterHeader">
          <p>{headerText}</p>
        </div>

        <div className="FormMonitorCenterBody">
          <Formik
            initialValues={props.formInitialValues(props.objInfo)}
            validationSchema={props.formValidationSchema()}
            onSubmit={(values) => {
              setIsLoading(true);
              values.certificateLevel = parseInt(values.certificateLevel);
              values.active && (values.active = parseInt(`${values.active}`));
              values.public && (values.public = parseInt(`${values.public}`));
              values.visible &&
                (values.visible = parseInt(`${values.visible}`));

              !isEditing ? props.useCreate(values) : props.useUpdate(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="formContent">
                {props.formSchema().inputs.map((input) => (
                  <div>
                    <Field name={input.name} placeholder={input.placeholder} />
                    {errors[input.name] && touched[input.name] && (
                      <div className="fieldError">
                        {errors[input.name].toString()}
                      </div>
                    )}
                  </div>
                ))}

                {props.formSchema().dropdowns.map((dropdown) => (
                  <Field name={dropdown.name} as="select">
                    {dropdown.options.map(option => (<option value={option.value}>{option.label}</option>))}
                  </Field>
                ))}

                <div className="formButtons">
                  <button type="submit" className="submitButton">
                    {isEditing ? "Guardar" : "Crear"}
                  </button>
                  <p className="cancelButton" onClick={() => navigate(-1)}>
                    Cancelar
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </LoadingHoc>
    </div>
  );
};

export default FormMonitorCenter;
