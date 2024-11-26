import { App } from "./components/App";

export default function Home() {
  return (
    <App logado={false}>
      <div className="flex flex-row">
        <div className="basis-1/2 p-4 mt-10">
          <img src="/home.svg" />
        </div>
        <div className="basis-1/2">
          <p className="text-white text-2xl text-center mt-10 p-4">
            Sou Voluntário, um projeto que aproxima pessoas e ONGs, facilitando
            a conexão, o engajamento e o suporte a causas sociais.
          </p>
        </div>
      </div>
    </App>
  );
}
