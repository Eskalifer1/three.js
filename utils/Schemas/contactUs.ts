import * as yup from "yup";

export const ContactUsScheme = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Use correct email"),
  text: yup
    .string()
    .required("This field is required")
    .min(10, "Min length is 10 symbols"),
});
