interface BotaoProps {
  nomeBotao: string;
  onClick: () => Promise<void>; 
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      className={`w-24 px-2 py-1 rounded-md tracking-wide
      bg-blue-500 text-yellow-100 text-md font-medium
      border-2 border-yellow-200
      hover:bg-blue-400 hover:text-black`} onClick={props.onClick}
    >
      {props.nomeBotao}
    </button>
  );
}

