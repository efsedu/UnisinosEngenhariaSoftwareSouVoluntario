import Link from "next/link";

const BotaoPrincipal = ({
  titulo,
  descricao,
  link,
}: {
  titulo: string;
  descricao: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <button className="bg-verdehome p-4 flex flex-col items-stretch m-4 min-h-96">
        <p className="bg-[#E7E014CC] p-2 font-extrabold text-lg font-[family-name:var(--font-irish-grover)]">
          {titulo}
        </p>
        <p className="mt-6 text-white">{descricao}</p>
      </button>
    </Link>
  );
};

export const BotoesPrincipais = () => {
  return (
    <ul className="flex flex-row">
      <li className="basis-1/5">
        <BotaoPrincipal
          titulo="Seja Voluntário"
          descricao="Seja voluntário e ajude várias causas que vá de acordo com seus princípios. Ajude com donativos ou com seu tempo."
          link="/sejavoluntario"
        />
      </li>
      <li className="basis-1/5">
        <BotaoPrincipal
          titulo="Cadastrar ONG"
          descricao="Se você tem ou participa de uma ONG, cadastre-a no portal e amplie o alcance da sua causa."
          link="/cadastrarong"
        />
      </li>
      <li className="basis-1/5">
        <BotaoPrincipal
          titulo="Minhas ONGs"
          descricao="Gerencie sua lista de ONGs favoritas e acompanhe seus projetos."
          link="/minhasongs"
        />
      </li>
      <li className="basis-1/5">
        <BotaoPrincipal
          titulo="ONGs Cadastradas"
          descricao="Descubra ONGs de diversas áreas e causas, explore seus projetos e encontre oportunidades de apoio."
          link="/ongscadastradas"
        />
      </li>
      <li className="basis-1/5">
        <BotaoPrincipal
          titulo="Eventos"
          descricao="Participe de eventos e campanhas de ONGs, conheça outras pessoas engajadas e contribua."
          link="/eventos"
        />
      </li>
    </ul>
  );
};
