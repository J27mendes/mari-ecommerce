import React, { createRef, useState, useEffect, forwardRef, useRef   } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTime";
import { FormEdit }  from "./FormEdit";
import { ValidacaoResolvida } from "../validacao/validacao";
import { IValidacaoForm } from "../../../interfaces/IValidacaoForm";
import Botao  from "../comum/Botao";
import { MailServices } from "@/services";
import { PatternFormat } from "react-number-format";

const Form = () => {
  const formMethods = useForm<IValidacaoForm>({ resolver: ValidacaoResolvida });
  const [valueTamanho, setValueTamanho] = useState('')
  const telefoneRef = useRef<HTMLInputElement>();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;
  async function validandoForm(values: IValidacaoForm): Promise<void> {
    values.tamanho = valueTamanho;
    const { status } = await MailServices.SendEmail(values);
    if (status === 201) {
      console.log("esta passando por aqui", values);
      reset();
    }
  }

  function handleFormSubmit(): Promise<void>  {
    return handleSubmit(validandoForm)();
  }

  useEffect(() => {
    const input = telefoneRef.current;
    if (input) {
      input.select();
    }
  }, [telefoneRef]);

  // eslint-disable-next-line react/display-name
  const ReactNumberFormat = React.forwardRef((props, ref) => (
    <PatternFormat {...props}  format="(##) #####-####" className="input-selecionado" id="telefone" name="telefone" mask=" " getInputRef={ref} />
  ));


  return (
    <FormProvider {...formMethods}>
      <form
        className={`flex flex-col gap-1.5 border-2 border-amber-400 rounded-md box p-4 bg-amber-100 font-semibold`}
        onSubmit={handleSubmit(validandoForm)}
      >
        <label htmlFor="nome">Nome Completo</label>
        <input
          {...register("nome")}
          name="nome"
          id="nome"
          type="text"
          className="input-selecionado"
        />
        {errors?.nome?.message && (
          <p className="error-text">{errors?.nome?.message}</p>
        )}
        <label htmlFor='email'>E-mail</label>
        <input
          {...register('email')}
          name="email"
          id='email'
          type="email"
          className="input-selecionado"
        />
        {errors?.email?.message && (
          <p className="error-text">{errors?.email?.message}</p>
        )}
        <label htmlFor="telefone">Telefone para contato</label> 
        <ReactNumberFormat  {...register("telefone")} />
        {errors?.telefone?.message && (
          <p className="error-text">{errors?.telefone?.message}</p>
        )}
        <DateTimePicker
          id="entrega"
          name="entrega"
          className="input-selecionado" htmlFor={"entrega"} label={"Data de Entrega"} />
        {errors?.entrega?.message && (
          <p className="error-text">{errors?.entrega?.message}</p>
        )}
        <FormEdit name={"body"} label={"Mensagem"}/>
        {errors?.body?.message && (
          <p className="error-text">{errors?.body?.message}</p>
        )}
        <label htmlFor="tamanho">Coloque o tamanho em Cm</label>
        <input
          {...register("tamanho")}
          name="tamanho"
          id="tamanho"
          type="number"
          className="input-selecionado"
          onChange={(e) => {
            const tamanhoString = e.target.value.toString(); 
            setValueTamanho(tamanhoString); 
          }}
        />  
        {errors?.tamanho?.message && (
          <p className="error-text">{errors?.tamanho?.message}</p>
        )}
        <Botao onClick={handleFormSubmit} nomeBotao={"Enviar"} />
      </form>
    </FormProvider>
  );
};

export default Form;

