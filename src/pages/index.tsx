import Cabecalho from "@/components/template/Cabecalho";
import Area from "@/components/template/comum/Area";
import Atelie from "@/components/template/Atelie";
import jesus from "../../public/Imagens/jesus.png";
import marilia from "../../public/Imagens/marilia.png";
import naruto from "../../public/Imagens/naruto.png";
import Rodape from "@/components/template/rodape";
import Linha from "@/components/template/comum/Linha";

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <Area id="atelie" className="bg-black py-16 sm:py-36">
        <div className="flex flex-col items-center gap-y-16 sm:gap-y-24">
          <Atelie
            imagem={marilia}
            titulo="Produtos de"
            titulo2="qualidade feitos"
            titulo3="Artesã Premiada."
            titulo4="por uma"
            subtitulo="Qualidade e produtos entregues no prazo estabelecido para a satisfação do cliente."
            inverter
          />
          <Atelie
            imagem={jesus}
            titulo="Esolha o tipo"
            titulo2="de personagem para a"
            titulo3="sua decoração."
            subtitulo="Animes, Quadrinhos ou Religiosos, Escolha qualquer personagem, tudo é possível."
          />
          <Atelie
            imagem={naruto}
            titulo="Escolha o"
            titulo2="melhor tamanho"
            titulo3="para sua peça."
            subtitulo="Qualquer tamanho de sua escolha e sempre com preço justo."
            inverter
          />
        </div>
      </Area>
      <Linha />
      <Rodape />
    </div>
  );
}
