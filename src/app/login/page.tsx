import { App } from "../components/App";

export default function Login() {
  return (
    <App logado={false}>
      <div className="flex flex-row p-2 justify-center">
        <div className="w-96 max-w-96 bg-slate-200 p-4 flex flex-col gap-4 items-center">
          <p className="p-2 text-center font-extrabold text-2xl font-[family-name:var(--font-irish-grover)]">
            Entre
          </p>
          <input placeholder="E-mail:" className="p-4 w-full" />
          <input placeholder="Senha:" className="p-4 w-full" />

          <div className="flex flex-row justify-between w-full">
            <label className="flex flex-row gap-1 text-sm">
              <input type="checkbox" />
              Lembrar Senha
            </label>
            <button>Esqueci minha senha</button>
          </div>

          <button className="bg-white rounded-lg p-3 w-24 mt-10">Entrar</button>

          <button className="underline mt-4">Esqueci minha senha</button>
        </div>
      </div>
    </App>
  );
}
