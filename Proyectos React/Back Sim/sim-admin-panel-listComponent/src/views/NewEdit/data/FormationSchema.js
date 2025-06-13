export const FormationSchema = () => ({
    inputs: [
      {
        name: "name",
        placeholder: "Nombre",
        type: "text",
      },
      {
        name: "url",
        placeholder: "URL",
        type: "text",
      },
    ],
    dropdowns: [
      {
        name: "public",
        options: [
          {
            label: "Privado",
            value: 0
          },
          {
            label: "Público",
            value: 1
          },
        ]
      },
      {
        name: "visible",
        options: [
          {
            label: "Oculto",
            value: 0
          },
          {
            label: "Visible",
            value: 1
          },
        ]
      },
      {
        name: "certificateLevel",
        options: [
          {
            label: "Nivel certificado 0",
            value: 0
          },
          {
            label: "Nivel certificado 1",
            value: 1
          },
          {
            label: "Nivel certificado 2",
            value: 2
          },
          {
            label: "Nivel certificado 3",
            value: 3
          },
        ]
      },
    ],
  }
);