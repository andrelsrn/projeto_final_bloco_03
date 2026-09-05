import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

export function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria por ID", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/categorias');
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso!');
    } catch (error) {
      console.error('Erro ao apagar a Categoria', error);
      alert('Erro ao apagar a Categoria.');
    }

    retornar();
  }

  return (
    <div className='container w-1/3 mx-auto min-h-[calc(100vh-140px)] flex flex-col items-center justify-center'>
      <h1 className='text-4xl text-center my-4 font-bold text-gray-900'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4 text-gray-700'>
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className='border-slate-900 border flex flex-col rounded-2xl overflow-hidden justify-between w-full bg-white shadow-md'>
        <header className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>
          Categoria
        </header>
        <p className='p-8 text-3xl bg-[#f8fafc] text-gray-800 h-full font-medium'>
          {categoria.nome}
        </p>
        <div className="flex">
          <button 
            className='text-slate-100 bg-red-500 hover:bg-red-700 w-full py-2 font-semibold transition-colors cursor-pointer'
            onClick={retornar}
          >
            Não
          </button>
          <button 
            className='w-full text-slate-100 bg-indigo-600 hover:bg-indigo-800 py-2 font-semibold transition-colors cursor-pointer'
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}