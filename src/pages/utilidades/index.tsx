import Cabecalho from "@/components/template/Cabecalho";
import Area from "@/components/template/comum/Area";
import Linha from "@/components/template/comum/Linha";
import Lista from "@/components/template/comum/Lista";
import Rodape from "@/components/template/rodape";

export default function Utilidades() {
  return (
    <div>
      <Cabecalho />
      <Area className="border border-red-400">
        <Lista />
      </Area>
      <Linha />
      <Rodape />
    </div>
  );
}
