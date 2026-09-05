import { ShoppingCart, User, MagnifyingGlass } from '@phosphor-icons/react';

export function Navbar() {
  return (
    <header className="w-full bg-[#2e3192] text-white flex justify-center py-4 shadow-md">
      <div className="container flex justify-between items-center text-sm px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
          <span className="text-red-600 text-3xl font-black">+</span>
          <span className="tracking-widest uppercase">Farmácia</span>
        </div>

        {/* Barra de Busca */}
        <div className="flex items-center w-1/3 bg-white rounded overflow-hidden">
          <input 
            type="text" 
            placeholder="Pesquisar" 
            className="w-full px-3 py-1.5 text-gray-800 outline-none"
          />
          <button className="bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
            <MagnifyingGlass size={18} weight="bold" />
          </button>
        </div>

        {/* Menus e Ícones */}
        <div className="flex gap-6 items-center">
          <span className="hover:underline cursor-pointer">Categorias</span>
          <span className="hover:underline cursor-pointer">Cadastrar Categoria</span>
          <User size={24} className="cursor-pointer" />
          <ShoppingCart size={24} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}