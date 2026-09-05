import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-cyan-200 flex items-center justify-center px-4 py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        {/* Conteúdo de texto */}
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Seja Bem Vinde!
          </h2>

          <p className="text-lg md:text-xl">
            Aqui você encontra os melhores produtos para sua saúde e bem-estar.
          </p>

          <Link
            to="/cadastrarproduto"
            className="bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 active:bg-indigo-700 transition-colors inline-block font-medium"
          >
            Cadastrar Produto
          </Link>
        </div>

        {/* Imagem da página home */}
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/carlosTeste/produtos_farmacia/homefarmacia.png?updatedAt=1788277297769"
            alt="Imagem da página Home"
            className="w-4/5 max-w-xs md:w-full md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}