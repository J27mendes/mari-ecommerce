import Cabecalho from "@/components/template/Cabecalho";
import Area from "@/components/template/comum/Area";
import Busca from "@/components/template/comum/Busca";
import Carrossel from "@/components/template/comum/Carrossel";
import Linha from "@/components/template/comum/Linha";
import Rodape from "@/components/template/rodape";

export default function Pecas() {
  return (
    <div>
      <Cabecalho />
      <Area page={true} className="flex">
        <Carrossel />
        <Busca />
      </Area>
      <Linha />
      <Rodape />
    </div>
  );
}
