import Link from "next/link";
import { App } from "../components/App";

const ongs = [
  {
    name: "Vida em Rede",
    description:
      "Apoia comunidades carentes com acesso à internet e capacitação digital.",
  },
  {
    name: "Sementes do Amanhã",
    description:
      "Promove educação ambiental para crianças e jovens em regiões rurais.",
  },
  {
    name: "Ponte do Abraço",
    description:
      "Conecta voluntários a pessoas em situação de vulnerabilidade social.",
  },
  {
    name: "Refúgio Esperança",
    description:
      "Oferece abrigo e suporte psicológico para vítimas de violência doméstica.",
  },
  {
    name: "Luz do Saber",
    description:
      "Distribui material escolar e organiza aulas gratuitas em áreas periféricas.",
  },
];

export default function MinhasOngs() {
  return (
    <App logado={true}>
      <div className="flex flex-col p-2">
        <p className="p-2 text-white font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
          Minhas Ongs
        </p>
        <div className="flex flex-row gap-4">
          {ongs.map((ong, idx) => (
            <Link key={idx} href={`/ong`}>
              <div className="w-52 p-4 bg-slate-50">
                <p className="bg-yellow-300 text-center font-bold font-[family-name:var(--font-irish-grover)]">
                  {ong.name}
                </p>
                <p className="mt-3 font-[family-name:var(--font-irish-grover)]">
                  {ong.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </App>
  );
}
