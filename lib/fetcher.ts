import axios from "axios";

export const sendContactForm = async (data: any) => {
  try {
    const response = await axios.post("api/mail", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
