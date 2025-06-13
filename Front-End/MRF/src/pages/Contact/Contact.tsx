import { FC } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { useTranslation, Trans } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { t } from "i18next";
import { contactFormRequest } from "../../services/formRequest";
import "./Contact.scss";

export const Contact: FC = () => {
  useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string().required(t("CONTACT_PAGE.VALIDATION.REQUIRED_NAME")),
    email: Yup.string()
      .email(t("CONTACT_PAGE.VALIDATION.INVALID_EMAIL"))
      .required(t("CONTACT_PAGE.VALIDATION.REQUIRED_EMAIL")),
    message: Yup.string().max(200, t("CONTACT_PAGE.VALIDATION.MAX_MESSAGE")),
    authorize: Yup.boolean().oneOf(
      [true],
      t("CONTACT_PAGE.VALIDATION.AUTHORIZE_REQUIRED")
    ),
  });

  return (
    <>
      <Carousel images={carouselData.contact.images} />
      <div className="contact-page-container">
        <div className="text-content">
          <h1 className="contact-title">
            <Trans i18nKey="CONTACT_PAGE.CONTACT.TITLE" />
          </h1>
          <div className="contact-info">
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT.TEXT_1" />
            </p>
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT.ADRESS" />
            </p>
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT.PHONE" />
            </p>
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT.MAIL" />
            </p>
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT.TEXT_2" />
            </p>
          </div>
        </div>

        <div className="form-content">
          <div className="form-intro">
            <h1>
              <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.TITLE" />
            </h1>
            <p>
              <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.FIELD" />
            </p>
          </div>
          <div className="form-fields">
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                authorize: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                contactFormRequest( "Formulario de contacto" , values)
              }}
            >
              {({
                isSubmitting,
                validateForm,
                submitForm,
                values,
                touched,
                setFieldTouched,
                errors,
              }) => (
                <Form className="form-container">
                  <div className="form-field">
                    <label>
                      <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.NAME" />
                    </label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div className="form-field">
                    <label>
                      <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.MAIL" />
                    </label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div className="form-field">
                    <label>
                      <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.MESSAGE" />
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      maxLength="200"
                      placeholder={t(
                        "CONTACT_PAGE.CONTACT_FORM.MESSAGE_PLACEHOLDER"
                      )}
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>

                  <div className="checkbox-field">
                    <label>
                      <Field
                        type="checkbox"
                        name="authorize"
                        onBlur={() => setFieldTouched("authorize", true)}
                      />{" "}
                      <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.CONTACT" />
                    </label>

                    <div
                      className={`checkbox-error ${
                        touched.authorize && errors.authorize ? "visible" : ""
                      }`}
                    >
                      <ErrorMessage name="authorize" component="div" />
                    </div>
                  </div>

                  <button
                    className="form-button"
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      validateForm().then((errors) => {
                        if (Object.keys(errors).length > 0) {
                          console.log("Errores en el formulario:", errors);
                        } else {
                          submitForm();
                        }
                      });
                    }}
                  >
                    <Trans i18nKey="CONTACT_PAGE.CONTACT_FORM.SEND_BUTTON" />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="contact-image">
        <img src="./assets/img/contact/contact-map.jpeg" alt="Mapa" />
      </div>

      <PreFooter currentPage={"CONTACT_PAGE"} />
    </>
  );
};
