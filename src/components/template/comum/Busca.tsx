import { useState, useEffect } from "react";
import { IconSearch } from "@tabler/icons-react";
import { utensilios } from "@/produtos/utensilios";
import Image from "next/image";
import mari from "../../../../public/Imagens/mari.png";

export default function Busca() {
  const [produtos, setProdutos] = useState(utensilios);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = utensilios.filter((item) => {
        return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(utensilios);
    }
  }, [pesquisa]);

  return (
    <div className="flex flex-col gap-y-2 w-1/3">
      <div className="flex border border-pink-400 shadow-md shadow-yellow-300 rounded-md overflow-hidden py-1">
        <input
          placeholder="Pesquise aqui..."
          className="px-2 w-[92%] focus:outline-none"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <IconSearch />
      </div>
      <div className="flex flex-col justify-around items-center h-full bg-yellow-200 rounded-md border-2 border-yellow-300">
        {produtos.map((item) => {
          if (item.nome.toLowerCase() === pesquisa.toLowerCase()) {
            return (
              <div key={item.id}>
                <Image alt="imagem" src={item.imagem} />
                <div className="flex justify-center text-black font-bold">
                  <h4>{item.descricao}</h4>
                </div>
              </div>
            );
          }
          return null;
        })}
        {produtos.length > 0 &&
          produtos.every(
            (item) => item.nome.toLowerCase() !== pesquisa.toLowerCase()
          ) && (
            <div>
              <Image alt="Imagem de resultado não encontrado" src={mari} />
              <div className="flex justify-center text-black font-bold">
                <h4>Pesquise o tipo de decoração que deseja...</h4>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
