import DatePicker, { registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'
import ptBR from 'date-fns/locale/pt-BR'
registerLocale('pt-BR', ptBR)

type Props = {
  name: string;
  id: string
  className?: string
  htmlFor: string
  label: string
}

export function DateTimePicker({ name, id, className, htmlFor, label }: Props) {

  const { control } = useFormContext()

  return (
    <label htmlFor={htmlFor}>
      {label}
      <Controller
      name={name}
      control={control}
      defaultValue={new Date()}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          showTimeSelect
          dateFormat="Pp"
          locale="pt-BR"
          selected={new Date(value)}
          id={id}
          onChange={(date: Date) => onChange(date.toISOString())}
          className={className}
          onKeyDown={(e) => {
            e.preventDefault();
          } } />
      )} />
      </label>
  )
}


