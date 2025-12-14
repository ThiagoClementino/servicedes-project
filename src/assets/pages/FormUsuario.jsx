import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formUsuarioSchema = yup.object({
  name: yup.string().required("Digite o seu nome completo"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite o seu e-mail"),
  phone: yup
    .string()
    .required("Digite o seu telefone")
    .matches(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Informe um telefone válido com DDD"
    ),
  cargo: yup.string().required("Digite o seu cargo"),
});

const FormUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formUsuarioSchema),
  });

  const onSubmit = (data) => {
    console.log("Usuário criado:", data);
    reset();
  };

  // Classes padrão para manter consistência visual (Dark Mode / Glass Effect)
  const inputClass =
    "block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6";
  const labelClass = "block text-sm/6 font-medium text-white";
  const errorClass = "mt-2 text-sm text-red-400";

  return (
    // Container Principal: Fundo escuro (bg-gray-900) ocupando a tela toda
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Sua Empresa"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Criar novo usuário
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className={labelClass}>
              Nome completo
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                {...register("name")}
                className={inputClass}
                placeholder="Ex: João Silva"
              />
            </div>
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                {...register("email")}
                className={inputClass}
                placeholder="joao@empresa.com"
              />
            </div>
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          {/* Campo Telefone */}
          <div>
            <label htmlFor="phone" className={labelClass}>
              Telefone
            </label>
            <div className="mt-2">
              <input
                type="tel" // Correção: 'phone' não é padrão, 'tel' habilita teclado numérico no mobile
                id="phone"
                {...register("phone")}
                className={inputClass}
                placeholder="(11) 99999-9999"
              />
            </div>
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>

          {/* Campo Cargo */}
          <div>
            <label htmlFor="cargo" className={labelClass}>
              Cargo
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="cargo"
                {...register("cargo")}
                className={inputClass}
                placeholder="Ex: Desenvolvedor Front-end"
              />
            </div>
            {errors.cargo && (
              <p className={errorClass}>{errors.cargo.message}</p>
            )}
          </div>

          {/* Botão de Enviar */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors"
            >
              Cadastrar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUsuario;
