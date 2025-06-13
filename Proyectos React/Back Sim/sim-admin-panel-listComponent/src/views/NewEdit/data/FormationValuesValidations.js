import * as Yup from "yup";

export const FormationValuesValidations = () => (
    Yup.object().shape({
        name: Yup.string()
          .min(2, "Demasiado corto")
          .max(50, "Demasiado largo")
          .required("Campo obligatorio!"),
        url: Yup.string()
          .max(250, "Máximo 16 caracteres")
          .matches(
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
            "Formato url incorrecto"
          )
          .required("Campo obligatorio!"),
      })
);