import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// Certifique-se de que @heroicons/react esteja instalado
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  // Função auxiliar para definir os estilos dos links (Ativo vs Inativo)
  const getLinkClass = ({ isActive }) => {
    // Estilos base para todos os links (flex, espaçamento, cantos arredondados, transição suave)
    const baseClass =
      "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold transition-all duration-200 ease-in-out";

    // Se estiver ativo: fundo índigo e texto branco
    if (isActive) {
      return `${baseClass} bg-indigo-600 text-white shadow-lg shadow-indigo-500/20`;
    }
    // Se estiver inativo: texto cinza, e hover com fundo translúcido
    return `${baseClass} text-gray-400 hover:text-white hover:bg-white/10`;
  };

  return (
    // Container Principal (Layout Flex para dividir a tela)
    <div className="flex h-screen w-full bg-gray-900 overflow-hidden">
      {/* --- INÍCIO DA SIDEBAR (Coluna Esquerda) --- */}
      <aside className="flex h-full w-72 flex-col gap-y-5 overflow-y-auto border-r border-white/10 bg-gray-900/95 px-6 pb-4 pt-8 shadow-xl">
        {/* Área do Logotipo */}
        <div className="flex h-16 shrink-0 items-center mb-4 md:mb-8">
          <img
            className="h-9 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="ServiceDesk Logo"
          />
          <span className="ml-4 text-xl font-bold text-white tracking-wide">
            ServiceDesk
          </span>
        </div>

        {/* Navegação */}
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-2">
                {/* Link: Home */}
                <li>
                  <NavLink to="/" end className={getLinkClass}>
                    {/* Usamos uma função para renderizar o children para mudar a cor do ícone dinamicamente */}
                    {({ isActive }) => (
                      <>
                        <HomeIcon
                          className={`h-6 w-6 shrink-0 ${
                            isActive
                              ? "text-white"
                              : "text-gray-500 group-hover:text-white"
                          }`}
                          aria-hidden="true"
                        />
                        Dashboard / Home
                      </>
                    )}
                  </NavLink>
                </li>

                {/* Link: Formulário (Chamados) */}
                <li>
                  <NavLink to="/formulario" className={getLinkClass}>
                    {({ isActive }) => (
                      <>
                        <ClipboardDocumentListIcon
                          className={`h-6 w-6 shrink-0 ${
                            isActive
                              ? "text-white"
                              : "text-gray-500 group-hover:text-white"
                          }`}
                          aria-hidden="true"
                        />
                        Abrir Chamado
                      </>
                    )}
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Link: Configurações (Empurrado para o final da sidebar com mt-auto) */}
            <li className="mt-auto border-t border-white/10 pt-4">
              <NavLink to="/configuracoes" className={getLinkClass}>
                {({ isActive }) => (
                  <>
                    <Cog6ToothIcon
                      className={`h-6 w-6 shrink-0 ${
                        isActive
                          ? "text-white"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                      aria-hidden="true"
                    />
                    Configurações
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      {/* --- FIM DA SIDEBAR --- */}

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL (Coluna Direita) --- */}
      {/* O 'flex-1' faz esta área ocupar todo o espaço restante */}
      <main className="flex-1 overflow-y-auto bg-gray-950 p-8 text-white">
        {/* O Outlet renderizará seus componentes (Home, FormUsuario, etc.) aqui dentro */}
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
      {/* --- FIM DO CONTEÚDO PRINCIPAL --- */}
    </div>
  );
};

export default Sidebar;
