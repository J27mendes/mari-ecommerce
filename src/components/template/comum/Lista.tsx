import { utensilios } from "@/produtos/utensilios";
import { useState } from "react";
import ListaItem from "./ListaItem";
import atelie from "../../../../public/Imagens/atelie.png"

export default function Lista() {
  const [produtos, setProdutos] = useState(utensilios);
  const [consulta, setConsulta] = useState('')

function verImg() {
  const item = produtos.find(item => item.id === consulta);
  if (consulta === item?.id) {
    return item.imagem;
  }
  return atelie
}

function verDescricao() {
  const item = produtos.find(item => item.id === consulta);
  if (consulta === item?.id) {
    return item.descricao;
  }
  return 'Ateliê Mari que faz'
}
  
  return (
    <div className="flex flex-row justify-around items-start px-2 h-full bg-yellow-200 rounded-md border-2 border-yellow-300">
      <div className="flex flex-col">
        {produtos.map((item) => {
          if (item.tipo === "personagem") {
            return (
              <div key={item.id}>
                <div className="flex text-violet-800 font-bold">
                  <h4 className="cursor-pointer hover:text-black hover:border-b-2 border-amber-500" onClick={() => { setConsulta(item.id) } }>{item.descricao}</h4>
                </div>
              </div>
            );
          }
        })}
        {produtos.map((item) => {
          if (item.tipo === "decoracao") {
            return (
              <div key={item.id}>
                <div className="flex text-blue-800 font-bold">
                  <h4 className="cursor-pointer hover:text-black hover:border-b-2 border-amber-500" onClick={() => { setConsulta(item.id) } }>{item.descricao}</h4>
                </div>
              </div>
            );
          }
        })}
        {produtos.map((item) => {
          if (item.tipo === "utilidade") {
            return (
              <div key={item.id}>
                <div className="flex text-pink-700 font-bold">
                  <h4 className="cursor-pointer hover:text-black hover:border-b-2 border-amber-500"  onClick={() => { setConsulta(item.id) } }>{item.descricao}</h4>
                </div>
              </div>
            );
          }
        })}
      </div>
      <ListaItem imagem={verImg()} descricao={verDescricao()}/>
    </div>
  );
}

