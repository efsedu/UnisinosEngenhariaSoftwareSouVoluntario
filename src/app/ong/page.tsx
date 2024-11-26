import { App } from "../components/App";

export default function VisualizarOng() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between">
          <p className="p-2 text-white font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
            ONG...
          </p>
          <button className="bg-white p-2 rounded-lg">Seja voluntário</button>
        </div>
        <div className="flex flex-row mt-3">
          <div className="basis-2/5 flex flex-col gap-3 mr-3">
            <div className="bg-white p-4 font-[family-name:var(--font-irish-grover)]">
              Sobre a ONG
            </div>
            <div className="bg-white p-4 font-[family-name:var(--font-irish-grover)]">
              Foto ou logo da ONG
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                Como ajudar?
              </p>
              <p className="mt-3 ">
                Voce pode nos ajudar atraves de doacoes financeiras, doando seu
                tempo, entre outros.
              </p>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                Próximos Eventos
              </p>
              <p className="mt-3 ">Informacoes dos proximos eventos</p>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                Como nos contatar?
              </p>
              <p className="mt-3 ">
                Voce pode nos contatar atraves do nosso contato ou e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
