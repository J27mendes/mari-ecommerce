import Link from "next/link";

interface menuProps {
  pecas: string;
  pedido: string;
  login: string;
  utilidades: string;
  home: string;
}

export default function Menu(props: menuProps) {
  return (
    <div className="flex justify-center items-center gap-4 font-bold">
      <Link
        href={"/"}
        className={`hover:bg-yellow-50 rounded-md 
            hover:border border-yellow-500 px-2 shadow-xl`}
      >
        {props.home}
      </Link>
      <Link
        href={"/utilidades"}
        className={`hover:bg-yellow-100 rounded-md 
            hover:border border-yellow-400 px-2 shadow-xl`}
      >
        {props.utilidades}
      </Link>
      <Link
        href={"/pecas"}
        className={`hover:bg-yellow-200 
            rounded-md hover:border border-yellow-300 
            px-2 shadow-xl`}
      >
        {props.pecas}
      </Link>
      <Link
        href={"/pedido"}
        className={`hover:bg-yellow-300 
        rounded-md hover:border border-yellow-200 
        px-2 shadow-xl`}
      >
        {props.pedido}
      </Link>
      <button className="hover:bg-yellow-400 rounded-md hover:border border-yellow-100 px-2 shadow-xl">
        {props.login}
      </button>
    </div>
  );
}
