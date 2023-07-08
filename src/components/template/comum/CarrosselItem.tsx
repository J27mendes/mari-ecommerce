import Image from "next/image";
import  Botao  from "./Botao";

interface ItemCarrosselProps {
  children?: any;
  className: string;
  imagem: any;
  descricao: string;
}

export default function ItemCarrossel(props: ItemCarrosselProps) {
  return (
    <div className="flex flex-col h-80 justify-evenly items-center">
      <Image
        src={props.imagem}
        alt="imagem"
        width={250}
        className="h-56 rounded-md"
      />
      <div
        className={`flex text-lg text-purple-800 px-2 shadow-md shadow-yellow-700`}
      >
        {props.descricao}
      </div>
      <div className="flex justify-around gap-3">
        <Botao nomeBotao={"Comprar"} onClick={function (): Promise<void> {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
}
