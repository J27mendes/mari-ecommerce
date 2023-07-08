import ImagemResponsiva from "./comum/ImagemResponsiva";

export interface AtelieProps {
  imagem: any;
  titulo: string;
  titulo2: string;
  titulo3: string;
  titulo4?: string;
  subtitulo?: string;
  inverter?: boolean;
}

export default function Atelie(props: AtelieProps) {
  return (
    <div
      className={`flex flex-col justify-around items-center mt-10 w-full gap-6 
        ${props.inverter ? "sm:flex-row-reverse" : "sm:flex-row"}`}
    >
      <ImagemResponsiva
        imagem={props.imagem}
        className={props.inverter ? "sm:rotate-6" : "sm:-rotate-6"}
        priority={true}
      />
      <div
        className={`flex flex-col gap-y-6 sm:w-[350px]
            text-center sm:text-left`}
      >
        <div
          className={`flex flex-col text-black
                font-black text-2xl sm:text-4xl`}
        >
          <div className="flex w-[230px] justify-center rounded-t-lg box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">
            {props.titulo}
          </div>
          <div className="flex justify-center rounded-tr-lg box-decoration-slice bg-gradient-to-r from-yellow-200 to-indigo-500">
            {props.titulo2}
          </div>
          <div className="flex justify-end box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">
            {props.titulo4}
          </div>
          <div className="flex justify-center rounded-b-lg box-decoration-slice bg-gradient-to-r from-pink-200 to-yellow-500">
            {props.titulo3}
          </div>
        </div>
        {props.subtitulo && (
          <span
            className={`font-semibold sm:text-lg text-black indent-8 pt-0 px-2 pb-2 rounded-sm inline-block align-baseline shadow-lg shadow-indigo-500/50`}
          >
            {props.subtitulo}
          </span>
        )}
      </div>
    </div>
  );
}
