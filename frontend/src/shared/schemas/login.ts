import * as yup from "yup";

export const login = yup.object().shape({
  user: yup
    .string()
    .email("Informe um email válido")
    .required("Informe um email válido")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Informe um email válido")
    .trim(),
  password: yup.string().required("Informe a senha"),
});
