import Link from "next/link";

export const Header = ({ logado }: { logado: boolean }) => {
  return (
    <div className="bg-[#FCE20099] p-4 flex flex-row items-center">
      <p className="flex-grow font-extrabold text-4xl text-center font-[family-name:var(--font-irish-grover)]">
        <Link href={"/"}>SOU VOLUNTÁRIO</Link>
      </p>
      <div className="flex flex-row gap-4">
        {logado ? (
          <Link href={"/meuperfil"}>
            <button className="bg-verdehome p-2 rounded-lg text-white font-bold font-[family-name:var(--font-irish-grover)]">
              Meu perfil
            </button>
          </Link>
        ) : (
          <>
            <Link href={"/cadastro"}>
              <button className="bg-verdehome p-2 rounded-lg text-white font-bold font-[family-name:var(--font-irish-grover)]">
                Cadastre-se
              </button>
            </Link>
            <Link href={"/login"}>
              <button className="bg-verdehome p-2 rounded-lg text-white font-bold font-[family-name:var(--font-irish-grover)]">
                Entre
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
