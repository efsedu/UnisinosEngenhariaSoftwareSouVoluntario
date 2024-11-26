import { ReactNode } from "react";
import { BotoesPrincipais } from "./BotoesPrincipais";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const App = ({
  children,
  logado,
}: {
  children: ReactNode;
  logado: boolean;
}) => {
  return (
    <>
      <Header logado={logado} />
      <div className="flex-grow ">
        <div className="bg-verdehome min-h-96">{children}</div>
        <BotoesPrincipais />
      </div>
      <Footer />
    </>
  );
};
