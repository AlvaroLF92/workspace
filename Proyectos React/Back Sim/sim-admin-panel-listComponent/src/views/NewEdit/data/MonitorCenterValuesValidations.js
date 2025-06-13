import * as Yup from "yup";

export const MonitorCenterValuesValidations = () => (Yup.object().shape({
    userName: Yup.string()
      .min(2, "Demasiado corto")
      .max(50, "Demasiado largo")
      .required("Campo obligatorio!"),
    password: Yup.string()
      .min(8, "Mínimo de 8 caracteres")
      .max(16, "Máximo 16 caracteres")
      .required("Campo obligatorio!"),
    email: Yup.string().email("Email no válido").required("Campo obligatorio!"),
    location: Yup.string()
      .min(2, "Demasiado corto")
      .max(100, "Demasiado largo")
      .required("Campo obligatorio!"),
  })
);