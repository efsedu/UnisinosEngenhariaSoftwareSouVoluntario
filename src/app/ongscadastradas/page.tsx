import { App } from "../components/App";

export default function OngsCadastradas() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2 justify-center items-center">
        <p className="p-2 text-center text-white font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
          ONGs Cadastradas
        </p>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row bg-slate-300 w-[600px] min-w-96 p-10">
            <div className="w-full bg-white">
              <p className="p-2 text-center font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
                Escolha as áreas de seu interesse:
              </p>
              <div className="flex flex-row">
                <div className="basis-1/2">
                  <div className="p-4 space-y-2">
                    <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                      <input type="checkbox" />
                      Saúde
                    </label>
                    <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                      <input type="checkbox" />
                      Educação
                    </label>
                    <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                      <input type="checkbox" />
                      Cultura e Artes
                    </label>
                    <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                      <input type="checkbox" />
                      Direitos Humanos
                    </label>
                    <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                      <input type="checkbox" />
                      Crianças e Adolescentes
                    </label>
                  </div>
                </div>
                <div className="basis-1/2">
                  <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                    <input type="checkbox" />
                    Meio-Ambiente
                  </label>
                  <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                    <input type="checkbox" />
                    Proteção Animal
                  </label>
                  <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                    <input type="checkbox" />
                    Segurança Alimentar e Nutrição
                  </label>
                  <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                    <input type="checkbox" />
                    Apoio a Grupos Marginalizados
                  </label>
                  <label className="flex flex-row gap-3 font-[family-name:var(--font-irish-grover)]">
                    <input type="checkbox" />
                    Desenvolvimento Social e Comunitário
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
