import Cabecalho from "@/components/template/Cabecalho";
import Area from "@/components/template/comum/Area";
import Linha from "@/components/template/comum/Linha";
import Form from "@/components/template/formulario/Form";
import Rodape from "@/components/template/rodape";

export default function Pedido() {
  return (
    <div>
      <Cabecalho />
      <Area className="flex">
        <Form />
      </Area>
      <Linha />
      <Rodape />
    </div>
  );
}
