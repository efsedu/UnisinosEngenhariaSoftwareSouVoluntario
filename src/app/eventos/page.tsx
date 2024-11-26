import { App } from "../components/App";

const eventos = [
  {
    name: "Conexão Solidária",
    description: "Mutirão para instalar internet em comunidades carentes.",
  },
  {
    name: "Plantando o Futuro",
    description: "Oficina de plantio sustentável para jovens.",
  },
  {
    name: "Dia do Abraço",
    description: "Campanha de arrecadação e doação de alimentos.",
  },
  {
    name: "Renascer em Paz",
    description: "Workshop de empoderamento e apoio psicológico.",
  },
  {
    name: "Círculo do Saber",
    description: "Aulão gratuito de reforço escolar.",
  },
];

export default function Eventos() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2">
        <p className="p-2 text-white font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
          Eventos
        </p>
        <div className="flex flex-row gap-4">
          {eventos.map((evento, idx) => (
            <div key={idx} className="w-52 p-4 bg-slate-50">
              <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                {evento.name}
              </p>
              <p className="mt-3 font-[family-name:var(--font-irish-grover)]">
                {evento.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </App>
  );
}
