import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Login = () => {
  const loginSchema = yup.object().shape({
    user: yup.string().required("Usuário obrigatório"),
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

  // Classes reutilizáveis para manter consistência com o formulário anterior
  const inputClass =
    "block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6";
  const labelClass = "block text-sm/6 font-medium text-white";
  const errorClass = "mt-2 text-sm text-red-400";

  return (
    <>
      {/* Container principal com fundo escuro (bg-gray-900) */}
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Sua Empresa"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Acesse sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Usuário */}
            <div>
              <label htmlFor="user" className={labelClass}>
                Usuário
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  type="text"
                  {...register("user")}
                  className={inputClass}
                  placeholder="Digite seu usuário"
                />
              </div>
              {errors.user && (
                <p className={errorClass}>{errors.user.message}</p>
              )}
            </div>

            {/* Senha */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={labelClass}>
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className={inputClass}
                  placeholder="Digite sua senha"
                />
              </div>
              {errors.password && (
                <p className={errorClass}>{errors.password.message}</p>
              )}
            </div>

            {/* Botão de Enviar */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Não é um membro?{" "}
            <Link
              to="/cadastro-usuario"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Teste grátis por 14 dias
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
