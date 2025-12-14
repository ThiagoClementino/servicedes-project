import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// Certifique-se de ter instalado: npm install @heroicons/react
import { PhotoIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

const formServiceDescSchema = yup.object().shape({
  sessao: yup.string().required("Campo obrigatório"),
  tipo: yup.string().required("Informe o tipo"),
  categoria: yup.string().required("Informe a categoria"),
  prioridade: yup.string().required("Defina a prioridade"),
  detalhes: yup.string().required("Informe os detalhes"),
  equipamento: yup.string().required("Informe o modelo do equipamento"),
  anexos: yup
    .mixed()
    .test("required", "O arquivo é obrigatório", (value) => {
      return value && value.length > 0;
    })
    .test("filesSize", "O arquivo é muito grande (Máx: 2MB)", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= MAX_FILE_SIZE;
    })
    .test(
      "fileType",
      "Formato não suportado. Apenas PDF, JPG ou PNG",
      (value) => {
        if (!value || value.length === 0) return true;
        return SUPPORTED_FORMATS.includes(value[0].type);
      }
    ),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formServiceDescSchema) });

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  // Classes reutilizáveis para manter o padrão do template
  const labelClass = "block text-sm/6 font-medium text-white";
  const inputClass =
    "block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6";

  const selectClass =
    "col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6";
  const errorClass = "mt-2 text-sm text-red-400";

  return (
    // Fundo escuro adicionado para contrastar com as classes text-white
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-base/7 font-semibold text-white">
                Abertura de Chamado
              </h2>
              <p className="mt-1 text-sm/6 text-gray-400">
                Preencha as informações abaixo para registrar sua solicitação.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* SEÇÃO */}
                <div className="sm:col-span-3">
                  <label htmlFor="sessao" className={labelClass}>
                    Seção
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="sessao"
                      {...register("sessao")}
                      className={selectClass}
                    >
                      <option value="">Selecione...</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Administração">Administração</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                  {errors.sessao && (
                    <p className={errorClass}>{errors.sessao.message}</p>
                  )}
                </div>

                {/* TIPO */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo" className={labelClass}>
                    Tipo
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="tipo"
                      {...register("tipo")}
                      className={selectClass}
                    >
                      <option value="">Selecione...</option>
                      <option value="incidente">Incidente</option>
                      <option value="Requisicao">Requisição de Serviço</option>
                      <option value="duvida">Dúvida</option>
                      <option value="problema">Problema</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                  {errors.tipo && (
                    <p className={errorClass}>{errors.tipo.message}</p>
                  )}
                </div>

                {/* CATEGORIA */}
                <div className="sm:col-span-3">
                  <label htmlFor="categoria" className={labelClass}>
                    Categoria
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="categoria"
                      {...register("categoria")}
                      className={selectClass}
                    >
                      <option value="">Selecione...</option>
                      <option value="Hardware">Hardware</option>
                      <option value="software">Software</option>
                      <option value="rede">Rede</option>
                      <option value="permicao">Acesso / Permissão</option>
                      <option value="email">E-mail</option>
                      <option value="telefonia">Telefonia</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                  {errors.categoria && (
                    <p className={errorClass}>{errors.categoria.message}</p>
                  )}
                </div>

                {/* PRIORIDADE */}
                <div className="sm:col-span-3">
                  <label htmlFor="prioridade" className={labelClass}>
                    Prioridade
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="prioridade"
                      {...register("prioridade")}
                      className={selectClass}
                    >
                      <option value="">Selecione...</option>
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                      <option value="critica">Crítica</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                  {errors.prioridade && (
                    <p className={errorClass}>{errors.prioridade.message}</p>
                  )}
                </div>

                {/* EQUIPAMENTO */}
                <div className="col-span-full">
                  <label htmlFor="equipamento" className={labelClass}>
                    Número de Série do Equipamento
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="equipamento"
                      {...register("equipamento")}
                      className={inputClass}
                      placeholder="Ex: SN-12345678"
                    />
                  </div>
                  {errors.equipamento && (
                    <p className={errorClass}>{errors.equipamento.message}</p>
                  )}
                </div>

                {/* DETALHES */}
                <div className="col-span-full">
                  <label htmlFor="detalhes" className={labelClass}>
                    Detalhes da Ocorrência
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="detalhes"
                      rows={5}
                      {...register("detalhes")}
                      className={inputClass}
                      placeholder="Descreva o problema detalhadamente..."
                    />
                  </div>
                  {errors.detalhes && (
                    <p className={errorClass}>{errors.detalhes.message}</p>
                  )}
                </div>

                {/* ANEXOS (Estilizado como o template) */}
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className={labelClass}>
                    Anexos
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto size-12 text-gray-600"
                      />
                      <div className="mt-4 flex text-sm/6 text-gray-400">
                        <label
                          htmlFor="anexos"
                          className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                        >
                          <span>Fazer Upload de um arquivo</span>
                          {/* O input real fica oculto (sr-only), mas conectado ao register */}
                          <input
                            id="anexos"
                            type="file"
                            className="sr-only"
                            {...register("anexos")}
                          />
                        </label>
                        <p className="pl-1">ou arraste e solte</p>
                      </div>
                      <p className="text-xs/5 text-gray-400">
                        PNG, JPG, PDF até 2MB
                      </p>
                      {/* Feedback visual se houver erro */}
                      {errors.anexos && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.anexos.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AVISO FINAL */}
            <div className="mt-6">
              <h3 className="text-sm text-gray-400">
                * Após a abertura do chamado, sua ocorrência será atendida em
                até 48 horas a depender do nível de prioridade.
              </h3>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-white hover:text-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Enviar Solicitação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
