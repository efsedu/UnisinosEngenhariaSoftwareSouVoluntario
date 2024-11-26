import { App } from "../components/App";

export default function MeuPerfil() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between">
          <p className="p-2 text-white font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
            Meu perfil de voluntário
          </p>
          <button className="bg-white p-2 rounded-lg">Seja voluntário</button>
        </div>
        <div className="flex flex-row mt-3">
          <div className="basis-2/5 flex flex-col gap-3 mr-3">
            <div className="bg-white p-4 font-[family-name:var(--font-irish-grover)]">
              Sobre o voluntário
            </div>
            <div className="bg-white p-4 font-[family-name:var(--font-irish-grover)]">
              Foto do voluntário
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                Doações
              </p>
              <p className="mt-3 ">Você pode ver suas doações aqui.</p>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                Meus Eventos
              </p>
              <p className="mt-3 ">
                Você pode ver aqui os eventos que você participou e os proximos.
              </p>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                ..............
              </p>
              <p className="mt-3 ">..............</p>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
