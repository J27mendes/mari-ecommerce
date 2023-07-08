import Image, { StaticImageData } from "next/image";
import Botao  from "./Botao";

interface imagemProps {
  imagem: StaticImageData;
  descricao: string;
}

export default function ListaItem(props: imagemProps) {
  return (
    <div>
      <Image
        alt="imagem"
        src={props.imagem}
        className="w-80 m-6 rounded-lg border-2 border-amber-500"
      />
      <div className="flex justify-around items-center gap-1">
        <h4 className="flex font-semibold text-indigo-800 text-decoration-line: overline decoration-orange-400">
          {props.descricao}
        </h4>
        <Botao nomeBotao={"Comprar"} onClick={function (): Promise<void> {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
}
