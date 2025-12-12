import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const loginSchema = yup.object().shape({
    user: yup.string().required("Usário obrigatório"),
    password: yup.string().required("Senha não informada"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Dados enviados", data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Usuário</label>
        <input {...register("user")} />
        <p>{errors.user.message}</p>

        <label htmlFor="password">Senha</label>
        <input {...register("password")} />
        <p>{errors.password.message}</p>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Login;
