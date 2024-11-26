import { App } from "../components/App";

export default function Cadastro() {
  return (
    <App logado={false}>
      <div className="flex flex-col p-2 ">
        <p className="p-2 text-center font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
          Cadastro de Usuário
        </p>
        <div className="flex flex-row">
          <div className="basis-1/2 flex flex-row justify-end">
            <div className="w-96 bg-slate-300 p-3 flex flex-col items-center gap-3">
              <input placeholder="Nome:" className="p-4 bg-white w-full" />
              <input placeholder="Telefone:" className="p-4 bg-white w-full" />
              <input placeholder="E-mail:" className="p-4 bg-white w-full" />
              <input placeholder="Senha:" className="p-4 bg-white w-full" />
              <input
                placeholder="Confirmar Senha:"
                className="p-4 bg-white w-full"
              />
              <button className="bg-white rounded-lg p-3 w-24 mt-10">
                Cadastrar
              </button>
            </div>
          </div>
          <div className="basis-1/2">
            <img src="/cadastro.svg" />
          </div>
        </div>
      </div>
    </App>
  );
}
