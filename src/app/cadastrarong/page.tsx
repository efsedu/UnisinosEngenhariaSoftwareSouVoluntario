import { App } from "../components/App";

export default function CadastrarOng() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2 justify-center items-center">
        <p className="p-2 text-center font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
          Cadastro de ONG
        </p>
        <div className="flex flex-row justify-end w-96">
          <div className="flex flex-row bg-slate-300">
            <div className="basis-1/2 p-4 space-y-3">
              <input
                placeholder="Nome da ONG:"
                className="p-4 bg-white w-full"
              />
              <input
                placeholder="CNPJ/Registro:"
                className="p-4 bg-white w-full"
              />
              <input placeholder="E-mail:" className="p-4 bg-white w-full" />
              <input placeholder="Telefone:" className="p-4 bg-white w-full" />
            </div>
            <div className="basis-1/2 p-4 space-y-3">
              <input
                placeholder="Descrição da ONG:"
                className="p-4 bg-white w-full"
              />
              <input placeholder="Endereço:" className="p-4 bg-white w-full" />
              <input
                placeholder="Área de atuação:"
                className="p-4 bg-white w-full"
              />
              <button className="bg-white rounded-lg p-3 w-24 mt-10">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
