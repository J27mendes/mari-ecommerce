import Area from "../comum/Area";
import Redes from "./Redes";

export default function Rodape() {
    return (
        <Area className="flex">
            <div className="flex flex-col gap-6 items-center md:items-start ">
                <div className="mt-1 text-zinc-600 text-center md:text-left">
                    <div>Encomende Já</div>
                    <div className="flex gap-1.5 font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-indigo-600">utilidades e<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-indigo-400">personagens preferidos</span> em feltro.</div>
                </div>
                <Redes />
            </div>
            <div className="flex flex-col md:flex-row md:justify-end items-center mt-0">
                <p className="text-zinc-500 mt-7 md:mt-0 text-center">
                    <span className="font-bold text-black">Mendes<span className="text-red-500">J27</span></span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
        </Area>
    )
}