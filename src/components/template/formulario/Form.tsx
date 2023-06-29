// import { FormProvider, useForm } from "react-hook-form";
// import { DateTimePicker } from "./DateTime";
// import { FormEdit } from "./FormEdit";
// import { ValidacaoResolvida } from "../validacao/validacao";
// import { IValidacaoForm } from "../../../interfaces/IValidacaoForm";
// import Botao from "../comum/Botao";
// import ReactInputMask from "react-input-mask";
// import { MailServices } from "@/services";

// export default function Form() {
//   const formMethods = useForm<IValidacaoForm>({ resolver: ValidacaoResolvida });
//   const {
//     formState: { errors },
//     register,
//     handleSubmit,
//     reset,
//   } = formMethods;

//   async function validandoForm(values: IValidacaoForm) {
//     const { status } = await MailServices.SendEmail(values);
//     if (status === 201) {
//       console.log(values);
//       reset();
//       // } else {
//       //   console.log(values, "está acontecendo algum erro no envio");
//       // }
//       //  console.log(values);
//     }

//     return (
//       <FormProvider {...formMethods}>
//         <form
//           className={`flex flex-col gap-1.5 border-2 border-amber-400 rounded-md box p-4 bg-amber-100 font-semibold`}
//           onSubmit={handleSubmit(validandoForm)}
//         >
//           <label htmlFor="nomeCompleto">Nome Completo</label>
//           <input
//             {...register("nomeCompleto")}
//             id="nomeCompleto"
//             type="text"
//             className="input-selecionado"
//           />
//           {errors?.nomeCompleto?.message && (
//             <p className="error-text">{errors?.nomeCompleto?.message}</p>
//           )}
//           <label htmlFor="email">E-mail</label>
//           <input
//             {...register("email")}
//             id="email"
//             type="email"
//             className="input-selecionado"
//           />
//           {errors?.email?.message && (
//             <p className="error-text">{errors?.email?.message}</p>
//           )}
//           <label htmlFor="telefone">Telefone para contato</label>
//           <ReactInputMask
//             {...register("telefone")}
//             name="telefone"
//             id="telefone"
//             className="input-selecionado"
//             mask="(99) 99999-9999"
//             maskChar=" "
//           />
//           {errors?.telefone?.message && (
//             <p className="error-text">{errors?.telefone?.message}</p>
//           )}
//           <label htmlFor="dataEntrega">Data da entrega</label>
//           <DateTimePicker
//             id="dataEntrega"
//             name="dataEntrega"
//             className="input-selecionado"
//           />
//           {errors?.dataEntrega?.message && (
//             <p className="error-text">{errors?.dataEntrega?.message}</p>
//           )}
//           <FormEdit label="Mensagem" name="body" />
//           {errors?.body?.message && (
//             <p className="error-text">{errors?.body?.message}</p>
//           )}
//           <label htmlFor="tamanho">Coloque o tamanho em Cm</label>
//           <input
//             {...register("tamanho")}
//             id="tamanho"
//             type="number"
//             className="input-selecionado"
//           />
//           {errors?.tamanho?.message && (
//             <p className="error-text">{errors?.tamanho?.message}</p>
//           )}
//           {/* <label htmlFor="arquivo">
//               Envie uma imagem que descreva seu pedido
//             </label>
//             <input
//               {...register("arquivo")}
//               id="arquivo"
//               type="file"
//               className="input-selecionado"
//               accept="image/*,.pdf"
//             />
//             {errors?.arquivo?.message && (
//               <p className="error-text">{errors?.arquivo?.message}</p>
//             )} */}
//           <Botao nomeBotao="Enviar" onClick={Form} />
//         </form>
//       </FormProvider>
//     );
//   }
// }
//o codigo aqui no botao está sendo alterado constantemente no onclick

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTime";
import { FormEdit } from "./FormEdit";
import { ValidacaoResolvida } from "../validacao/validacao";
import { IValidacaoForm } from "../../../interfaces/IValidacaoForm";
import Botao from "../comum/Botao";
import ReactInputMask from "react-input-mask";
import { MailServices } from "@/services";

const Form = () => {
  const formMethods = useForm<IValidacaoForm>({ resolver: ValidacaoResolvida });
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;

  async function validandoForm(values: IValidacaoForm):Promise<void>  {
    const { status } = await MailServices.SendEmail(values);
    console.log(values);
    if (status === 201) {
      console.log('esta passando por aqui', values)
      reset();
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form
        className={`flex flex-col gap-1.5 border-2 border-amber-400 rounded-md box p-4 bg-amber-100 font-semibold`}
        onSubmit={handleSubmit((values) => validandoForm(values))}
      >
        <label htmlFor="nomeCompleto">Nome Completo</label>
        <input
          {...register("nomeCompleto")}
          id="nomeCompleto"
          type="text"
          className="input-selecionado"
        />
        {errors?.nomeCompleto?.message && (
          <p className="error-text">{errors?.nomeCompleto?.message}</p>
        )}
        <label htmlFor="email">E-mail</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="input-selecionado"
        />
        {errors?.email?.message && (
          <p className="error-text">{errors?.email?.message}</p>
        )}
        <label htmlFor="telefone">Telefone para contato</label>
        <ReactInputMask
          {...register("telefone")}
          name="telefone"
          id="telefone"
          className="input-selecionado"
          mask="(99) 99999-9999"
          maskChar=" "
        />
        {errors?.telefone?.message && (
          <p className="error-text">{errors?.telefone?.message}</p>
        )}
        <label htmlFor="dataEntrega">Data da entrega</label>
        <DateTimePicker
          id="dataEntrega"
          name="dataEntrega"
          className="input-selecionado"
        />
        {errors?.dataEntrega?.message && (
          <p className="error-text">{errors?.dataEntrega?.message}</p>
        )}
        <FormEdit label="Mensagem" name="body" />
        {errors?.body?.message && (
          <p className="error-text">{errors?.body?.message}</p>
        )}
        <label htmlFor="tamanho">Coloque o tamanho em Cm</label>
        <input
          {...register("tamanho")}
          id="tamanho"
          type="number"
          className="input-selecionado"
        />
        {errors?.tamanho?.message && (
          <p className="error-text">{errors?.tamanho?.message}</p>
        )}

        <Botao nomeBotao="Enviar" onClick={() => handleSubmit(validandoForm)()} />
      </form>
    </FormProvider>
  );
};

export default Form;
//Com essas melhorias, a função validandoForm será chamada corretamente quando o botão for clicado, e a validação do formulário será executada. Certifique-se de ajustar os caminhos dos arquivos importados de acordo com a estrutura do seu projeto.
