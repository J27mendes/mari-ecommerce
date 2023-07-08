import { Controller, useFormContext } from "react-hook-form";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type Props = {
  name: string;
  label: string;
};

export function FormEdit({ name, label }: Props) {
  const { control } = useFormContext();
  const editor = useRef<any>(null);

  const params = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    }),
    []
  ); 

  useEffect(() => {
    const joditEditor = editor.current?.editor;
    if (joditEditor) {
      joditEditor.events.on("blur", () => {
        const value = joditEditor.value;
        editor.current?.props.onChange(value);
      });
    }
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, value } }) => (
        <div className="jodit-editor-wrapper">
          <p>{label}</p>
          <JoditEditor
            value={value}
            config={params}
            ref={editor}
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
      )}
    />
  );
}
