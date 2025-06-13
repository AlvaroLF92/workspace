import axios from "axios";

export const contactFormRequest = async (subject: string, message: {}) => {
  try {
    const respuesta = await axios.post(
      "https://api.motionrentandfun.com/send-email",
      {
        subject: subject,
        message: message,
      }
    );

    console.log("Respuesta del servidor:", respuesta.data);
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
};
