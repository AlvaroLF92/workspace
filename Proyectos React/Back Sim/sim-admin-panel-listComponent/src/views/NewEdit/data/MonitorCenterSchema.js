export const MonitorsCenterSchema = () => ({
    inputs: [
      {
        name: "userName",
        placeholder: "Nombre de usuario",
        type: "text",
      },
      {
        name: "password",
        placeholder: "Contraseña",
        type: "text",
      },
      {
        name: "email",
        placeholder: "Email",
        type: "email",
      },
      {
        name: "location",
        placeholder: "Dirección",
        type: "text",
      },
    ],
    dropdowns: [
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
      {
        name: "active",
        options: [
          {
            label: "Estado Inactivo",
            value: 0
          },
          {
            label: "Estado Activo",
            value: 1
          },
        ]
      }
    ],
  }
);