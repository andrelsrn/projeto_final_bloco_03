import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import type Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { CardCategorias } from '../cardcategorias/CardCategorias';

export function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="bg-[#f0f9ff] min-h-[calc(100vh-140px)] pb-12">
      {categorias.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
          />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}