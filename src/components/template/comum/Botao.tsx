// interface BotaoProps {
//   nomeBotao: string;
//   onClick: () => Promise<void>; 
// }

// export default function Botao(props: BotaoProps) {
//   return (
//     <button
//       className={`w-24 px-2 py-1 rounded-md tracking-wide
//       bg-blue-500 text-yellow-100 text-md font-medium
//       border-2 border-yellow-200
//       hover:bg-blue-400 hover:text-black`} onClick={props.onClick}
//     >
//       {props.nomeBotao}
//     </button>
//   );
// }

// import React from "react";

// type Props = {
//   type?: "button" | "submit" | "reset";
//   variant?: "default" | "dark" | "primary" | "light";
//   children: React.ReactNode;
//   onClick:  () => { void: any}; 
// };

// export function Button({ type = "button", variant, children }: Props) {
//   let bgColor = "text-black";
//   if (variant === "dark") bgColor = "bg-primaryDark text-white";
//   else if (variant === "primary") bgColor = "bg-primary text-white";
//   else if (variant === "light") bgColor = "bg-primaryLight text-black";

//   const buttonClassName = `button ${bgColor}`;

//   return (
//     <button type={type} className={buttonClassName} >
//       {children}
//     </button>
//   );
// }

import React from 'react';

interface BotaoProps {
  nomeBotao: string;
  onClick: () => Promise<void>;
}

const Botao: React.FC<BotaoProps> = (props) => {
  return (
    <button
      className={`w-24 px-2 py-1 rounded-md tracking-wide
      bg-blue-500 text-yellow-100 text-md font-medium
      border-2 border-yellow-200
      hover:bg-blue-400 hover:text-black`}
      onClick={props.onClick}
    >
      {props.nomeBotao}
    </button>
  );
}

export default Botao;